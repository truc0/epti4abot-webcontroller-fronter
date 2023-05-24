import { toRefs, type Ref } from "vue";
import defu from "defu";
import { useStore } from "@/stores";

export interface UseController {
  minSpeed: number;
  maxSpeed: number;
  stepSpeed: number;
  interval: number; // in millisecond
};

const defaultControllerParams: UseController = {
  minSpeed: -100,
  maxSpeed: 100,
  stepSpeed: 5,
  interval: 100,
};

export interface useNumberPressControl {
  minVal: number;
  maxVal: number;
  step: number;
  interval: number; // in millisecond
};

export const useNumberPressControl = (r: Ref<number>, params: useNumberPressControl) => {
  const { minVal, maxVal, step, interval } = params;

  function intervalFn() {
    if (r.value + step > maxVal) {
      r.value = maxVal;
      return;
    }
    if (r.value + step < minVal) {
      r.value = minVal;
      return;
    }
    r.value += step;
  };

  let intervalInst: null | number = null;

  const onKeyDown = () => {
    if (intervalInst) {
      clearInterval(intervalInst);
      console.warn('try to set up new interval while the old one is not cleared');
    }
    intervalInst = setInterval(intervalFn, interval);
  };

  const onKeyUp = () => {
    r.value = 0;
    if (intervalInst) {
      clearInterval(intervalInst);
      intervalInst = null;
    }
  };

  return {
    onKeyDown, onKeyUp
  };
};

export const useController = (options: Partial<UseController> = {}) => {
  const store = useStore();
  const params: UseController = defu(options, defaultControllerParams); 

  const { x, turn } = toRefs(store.carState);

  const speedParams: useNumberPressControl = {
    minVal: params.minSpeed,
    maxVal: params.maxSpeed,
    step: params.stepSpeed, 
    interval: params.interval,
  };
  const { onKeyDown: onFrontKeyDown, onKeyUp: onFrontKeyUp } = useNumberPressControl(x, speedParams);
  const { onKeyDown: onBackKeyDown, onKeyUp: onBackKeyUp } = useNumberPressControl(
    x,
    {...speedParams, step: -params.stepSpeed}, // use -stepSpeed to go back
  );

  const turnParams: useNumberPressControl = {
    minVal: -100,
    maxVal: 100,
    step: 10,
    interval: params.interval,
  };
  const { onKeyDown: onLeftKeyDown, onKeyUp: onLeftKeyUp } = useNumberPressControl(turn, turnParams);
  const { onKeyDown: onRightKeyDown, onKeyUp: onRightKeyUp } = useNumberPressControl(
    turn,
    {...turnParams, step: -params.stepSpeed}, // use -stepSpeed to go back
  );

  return {
    onFrontKeyDown,
    onFrontKeyUp,
    onBackKeyDown,
    onBackKeyUp,
    onLeftKeyDown,
    onLeftKeyUp,
    onRightKeyDown,
    onRightKeyUp,
    stop,
  }
};

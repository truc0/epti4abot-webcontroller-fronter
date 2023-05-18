---
outline: deep
---

# What is EPTI4ABOT?

EPTI4ABOT is a robot solution for navigation and obstacle avoidance.

The hardware requirements are designed to be not expensive (can be cheaper) and easy to use.
The project also uses popular frameworks for building softwares part of the system.

## Demo

> TBA

## Dependencies

### Hardware

- Raspberry Pi 4B
- DFRobot Romeo BLE
- DFRobot Chebyshev
- RPLidar A1
- IMU (TBA)

DFRobot Remeo BLE is used to output PWM signal to control the DFRobot Chebyshev car. Raspberry Pi 4B does not support output PWM signal in 5V, while 5V is the voltage required for the DFRobot Chebyshev car. Therefore, DFRobot Romeo BLE is used to convert the 3.3V PWM signal from Raspberry Pi 4B to 5V PWM signal.

More detailly, the DFRobot Romeo BLE is connected to Raspberry Pi 4B via Serial port and a tiny program for communication is required and implemented. You may drop DFRobot Romeo BLE if you have other ways to convert the PWM signal. Note that you may need to change the logic of outputing signal in ROS2 controller. `include/epti4abot/car_controller.hpp` is one of the files you may need to change.

### Software

- Ubuntu 22.04
- ROS2 humble
- FastAPI (Web Controller)
- Vue.js (Web Controller)

The version of OS in Raspberry Pi is not strict. We use Ubuntu since it is hard to install ROS2 in RaspberryOS. The version of ROS2 is also not restricted. We use humble since it is the latest version of ROS2 at the time we start the project.

## Project Structure

### EPTI4ABOT Hardware Controller

> Github: [https://github.com/hongfanmeng/epti4abot](https://github.com/hongfanmeng/epti4abot)

This repository contains all controller code for the robot.

It connects the DFRobot Chebyshev car, IMU, lidar, and other sensors together and perform SLAM for navigation and obstacle avoidance.

You may take a look at `README.md` file of this repository for more details.

### EPIT4ABOT Web Controller (Frontend)

> Github: [https://github.com/truc0/epti4abot-webcontroller-fronter](https://github.com/truc0/epti4abot-webcontroller-fronter)

This repository contains the frontend of web controller and this documentation.

The web controller is based on Vue.js and Vite development kit (including [pinia](https://pinia.vuejs.org) for state management and [vue-rourter](https://router.vuejs.org) for page switching), using [tailwindcss](https://tailwindcss.com/) for styling.

The documentation part is based on [vitepress](https://vitepress.vuejs.org/).

### EPIT4ABOT Web Controller (Backend)

> Github: TBA

This repository contains the backend of web controller.

The backend controller uses a ROS2 publisher to send command from the frontend to the controller in ROS2 framework. The implementation of the backend is quite simple, it only contains a ROS2 publisher and a FastAPI instance.

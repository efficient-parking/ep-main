Efficient Parking
==============

## 📜 Information about our project
The [**Efficient Parking**](https://efficientparking-test.firebaseapp.com) project was born from the idea of simplifying car parking operations. Our business model proposes not to use tickets for payment, eliminating any risk of loss and reducing the environmental impact. Furthermore, our product aims to speed up payments by avoiding unnecessary long queues. The simple and minimal interface allows even the less knowledgeable of technology to use our service. The progressive abandonment of cash will be favored by our new system based on digital payments, without the need for a physical credit card.
For new visitors from other cities it will be impossible to lose the car thanks to the integration of Google Maps both on the site and on the application, which allows you to get directions to return to the parking lot.
Passwords are saved on the database through a latest generation one-way encryption system.

## ⚙ Technical specifications

To improve software sharing and portability, in recent months we have
placed the focus on the development of a customized operating system (called
epOS) based on Raspberry Pi OS Lite. The image is simply downloadable
from the appropriate GitHub repository and once mounted on an SD card or device
USB, requires only the configuration of the Wi-Fi network (via the
wpa_supplicant.conf).
However, the operating system was only tested by simulating bash scripts on GitHub
Actions and previously on Travis CI (two continuous integration services
used to create and test software projects hosted on GitHub and Bitbucket),
while it has not yet passed the test phase in the real environment.

## 👥 Contributor

We are two IT students from Vicenza, Italy:

| | | | | | |
|:---|:---|:---|:---:|:---|:---|
| [<img src="https://github.com/lorenzozoccarato.png" width="40">](https://github.com/lorenzozoccarato) | Lorenzo Zoccarato | [@lorenzozoccarato](https://github.com/lorenzozoccarato) | Student |ITIS Rossi| 5AIT|
| [<img src="https://github.com/roberto-costa.png" width="40">](https://github.com/roberto-costa) | Roberto Costa | [@roberto-costa](https://github.com/roberto-costa) | Student |ITIS Rossi| 5AIT|

## 🔽 How to clone specific branches locally
Do you want to develop and improve our project? Help us!
```sh
$ git clone https://github.com/efficient-parking/ep-main.git --single-branch --branch <branch-name>
```
## 📦 Releases
You can can download materials by visiting the [Release Page](../../releases).
***

This repository contains the OS  which runs on the Raspberry Pi with Pi Camera.

In the following is a description of what the code does, how does it work and how to run on SD Card. The documents ends with a description of the folder structure of this `code` branch.

In this project, the OpenCV library was used to detect and recognize
plaques, and the Tesseract library for reading characters. So, before
proceed further, you must first install OpenCV, Tesseract and other libraries
requests.
Below are the commands to execute in the Raspberry Pi OS terminal:

1. Update the Raspberry Pi:
<br /> `sudo apt-get update`

2. Install the dependencies required for the OpenCV installation:
<br /> `sudo apt-get install libhdf5-dev -y` <br />
`sudo apt-get install libhdf5-serial-dev –y` <br />
`sudo apt-get install libatlas-base-dev –y` <br />
`sudo apt-get install libjasper-dev -y` <br />
`sudo apt-get install libqtgui4 –y` <br />
`sudo apt-get install libqt4-test –y` <br />

3. Install pip:
<br /> `sudo apt install python3-pip`

4. Install OpenCV:
<br /> `pip3 install opencv-contrib-python==4.1.0.25`

5. Configure Debian Package (dpkg):
<br /> `sudo dpkg - -configure –a`

6. Install Tesseract OCR (Optical Character Recognition):
<br /> `sudo apt-get install tesseract-ocr`

7. Install the pytesseract library using pip:
<br /> `pip install pytesseract`

8. Install the PYTTSX3 library using pip:
<br /> `pip install pyttsx3`

9. Install the imutils library
The imutils library is used to make processing functions easier
of essential images such as translation, rotation, resizing, the
skeletonization and visualization of Matplotlib images with OpenCV:
<br /> `pip3 install imutils`

10. Install additional Python libraries:
<br /> `pip3 install python-jwt` <br />
`pip3 install gcloud` <br />
`pip3 install sseclient` <br />
`pip3 install requests_toolbelt` <br />

11. Install libraries for the Firebase database:
<br /> `pip3 install python-firebase` <br />
`pip3 install firebase` <br />
`pip3 install firebase_admin` <br />

12. Install add-ons for Raspberry Pi
<br /> `sudo apt-get install idle3` <br />
`sudo apt-get install git` <br />
`git clone https://github.com/silvanmelchior/RPi_Cam_Web_Interface.git` <br />
`cd RPi_Cam_Web_Interface` <br />
`./install.sh` <br />

***

Efficient Parking: mechanical drawings
=====================================

## CAD repository
This repository contain CAD files of Raspberry Pi cover for Pi Camera. Follow this [site][1] for more instructions 📷

You can download the CAD releases by visiting the [Release Page][2] 📦

[1]: https://tinkererblog.wordpress.com/2015/07/28/how-i-designed-a-compact-weatherproof-raspberry-pi-case/
[2]: ../../releases

***
# Efficient Parking Website

The web service has been implemented to bring the Efficient service everywhere
Parking. The three basic points of the website are as follows:
 - Simple design: the site has been designed with a simple design that allows
to complete payment transactions quickly.
 - Security: the data stored in the database are not shared with
other companies. Passwords are not saved in clear text and are encrypted with a
latest generation one-way encryption method.
 - Organization: the site makes it possible to simplify the customer's life.

The website was written in HTML, a formatting language that describes
how to visualize the content graphically. HTML is not a language of
programming therefore, but only describes the layout methods. A
another language used is CSS (Cascading Style Sheets)
cascade) used to define the formatting of HTML documents, which
allows you to customize tags as you like. Finally, for the programming part
Javascript, an object-oriented programming language, was used
and events that allow the developer to run scripts.

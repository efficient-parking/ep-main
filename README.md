Efficient Parking: code
==========



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

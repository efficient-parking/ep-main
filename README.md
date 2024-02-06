Efficient Parking
==============

## 📜 Information about our project
The [**Efficient Parking**](http://efficientparking.altervista.org/) project was born from the idea of simplifying car parking operations. Our business model proposes not to use tickets for payment, eliminating any risk of loss and reducing the environmental impact. Furthermore, our product aims to speed up payments by avoiding unnecessary long queues. The simple and minimal interface allows even the less knowledgeable of technology to use our service. The progressive abandonment of cash will be favored by our new system based on digital payments, without the need for a physical credit card.
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

## 🌳 Repository structure
This repository is organized based upon the following multiple parallel branches:
- 🔘 [`master`](../../tree/master) contains the core design.
- 🔘 [`code`](../../tree/code) contains code (Efficient Parking OS).
- 🔘 [`mech`](../../tree/mech) contains mechanical drawings (Raspberry Pi Cover).
- 🔘 [`web`](../../tree/web) contains web code (www.efficientparking.altervista.org).

## 👥 Contributor

We are two IT students from Vicenza, Italy:

| | | | | | |
|:---|:---|:---|:---:|:---|:---|
| [<img src="https://github.com/lorenzozoccarato.png" width="40">](https://github.com/lorenzozoccarato) | Lorenzo Zoccarato | [@lorenzozoccarato](https://github.com/lorenzozoccarato) | Student |ITIS Rossi| 5AIT|
| [<img src="https://github.com/roberto-costa.png" width="40">](https://github.com/roberto-costa) | Roberto Costa | [@roberto-costa](https://github.com/roberto-costa) | Student |ITIS Rossi| 5AIT|

### 🔽 How to clone specific branches locally
Do you want to develop and improve our project? Help us!
```sh
$ git clone https://github.com/efficient-parking/ep-main.git --single-branch --branch <branch-name>
```
### 📦 Releases
You can can download materials by visiting the [Release Page](../../releases).

## ✉ Contacts
If you need further information on the Efficient Parking project, don't hesitate to send an email to <**info@efficientparking.com**>. 
Besides, you can follow us on our social channels (Twitter, YouTube, Twitch...).

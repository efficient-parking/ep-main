import cv2
import imutils
import numpy as np
import pytesseract
from PIL import Image
from picamera.array import PiRGBArray
from picamera import PiCamera
import datetime
from firebase import firebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

firebase= firebase.FirebaseApplication("https://efficientparking-62353.firebaseio.com/", None)
cred = credentials.Certificate('/home/pi/Downloads/efficientparking-62353-firebase-adminsdk-hqc69-5e29dbea8c.json')
firebase_admin.initialize_app(cred, {'databaseURL': 'https://efficientparking-62353.firebaseio.com/'})

while True:
        camera = PiCamera()
        camera.resolution = (640, 480)
        camera.framerate = 30
        rawCapture = PiRGBArray(camera, size=(640, 480))
        for frame in camera.capture_continuous(rawCapture, format="bgr", use_video_port=True):
                image = frame.array
                cv2.imshow("Video", image)
                key = cv2.waitKey(1) & 0xFF
                rawCapture.truncate(0)
                if key == ord("a"):
                gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
                gray = cv2.bilateralFilter(gray, 11, 17, 17)
                edged = cv2.Canny(gray, 30, 200)
                cnts = cv2.findContours(edged.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
                cnts = imutils.grab_contours(cnts)
                cnts = sorted(cnts, key = cv2.contourArea, reverse = True)[:10]
                screenCnt = None
                for c in cnts:
                        peri = cv2.arcLength(c, True)
                        approx = cv2.approxPolyDP(c, 0.018 * peri, True)
                        if len(approx) == 4:
                                screenCnt = approx
                                break
                        if screenCnt is None:
                                detected = 0
                                print ("Contorni non trovati")
                        else:
                                detected = 1
                        if detected == 1:
                                cv2.drawContours(image, [screenCnt], -1, (0, 255, 0), 3)
                mask = np.zeros(gray.shape,np.uint8)
                new_image = cv2.drawContours(mask,[screenCnt],0,255,-1,)
                new_image = cv2.bitwise_and(image,image,mask=mask)
                (x, y) = np.where(mask == 255)
                (topx, topy) = (np.min(x), np.min(y))
                (bottomx, bottomy) = (np.max(x), np.max(y))
                Cropped = gray[topx:bottomx+1, topy:bottomy+1]
                text = pytesseract.image_to_string(Cropped, config='--psm 11')
                text= text.replace("-", "")
                text= text.replace("/", "")
                text= text.replace("|", "")
                text= text.replace(".", "")
                text= text.replace(":", "")
                text= text.replace("'", "")
                text= text.replace(")", "")
                text= text.replace("(", "")
                text= text.replace(" ", "")
                text= text.replace("", "")
                array_text = list(text)[:-1]
                print(array_text)
                text="".join(array_text)
                print("Il numero di targa è:",text)
                now = datetime.datetime.now()
                print(now.strftime('%H.%M.%S'))
                time=now.strftime('%H.%M.%S')
                text= str(text) + "/"
                indirizzo= "/users/"
                indirizzo=str(indirizzo)+str(text)
                result= firebase.put(indirizzo,'entrata', time)
                cv2.waitKey(0)
                #break
cv2.destroyAllWindows()

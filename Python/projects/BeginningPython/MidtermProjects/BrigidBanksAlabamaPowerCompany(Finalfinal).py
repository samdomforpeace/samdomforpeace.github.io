import time
import pytz
import datetime
from dateutil.relativedelta import relativedelta

def isfloat(num):
    try:
        float(num)
        return True
    except ValueError:
        return False

def calcbill(powerused):
    basecharge = 14.50
    cost1 = 0.12233
    cost2 = 0.11033
    totalcharge = 0
    if powerused == 0:
        totalcharge = basecharge
    elif powerused <= 750:
        totalcharge = basecharge+cost1*powerused
    else:
        totalcharge = basecharge+cost1*750+cost2*(powerused-750)

    return totalcharge

print("Hello, welcome to Alabama Power Company!")
time.sleep(2)
Firstname = input("Please enter your first name..")
Lastname = input("Please enter your last name..")
time.sleep(1)



inputinvalid=True
while(inputinvalid):

    initalreadingstr=input("What was your Initial Reading in KWh? ")
    time.sleep(1)
    finalreadingstr=input("What was your Final Reading in KWh? ")

    time.sleep(1)
    if isfloat(initalreadingstr):
         initalreading = float(initalreadingstr)
         if initalreading<0:
             print("Your input is less than zero, please enter a valid input.")
             continue
    else:
        print("Invalid initial reading. Please try again.")
        continue

    if isfloat(finalreadingstr):
        finalreading = float(finalreadingstr)
        if finalreading<0:
            print("Your input is less than zero, please enter a valid input.")
            continue
    else:
        print("Invalid final reading, please try again.")
        continue


    if initalreading>finalreading:
        print("This is an invalid input, initial reading must be less than or equal to final reading. Please try again.")
    else:
        inputinvalid=False

inputinvalid = True
while(inputinvalid):
    taxstr = input("What was your Tax? Please enter your value in percent.")
    if isfloat(taxstr):
        tax=float(taxstr)
        if tax<0:
            print("Your tax input is less than zero, please enter a valid input.")
        else:
            inputinvalid = False
    else:
        print("Invalid tax,please enter a valid number.")


now=datetime.datetime.now()
hour=now.hour
if hour>5 and hour<12:
    message="Good morning"
elif hour>11 and hour<17:
    message="Good afternoon"
else:
    message="Good evening"

print(message + ", it's nice to meet you {}".format(Firstname + " " + Lastname))
time.sleep(1)
print ("Today is " + time.strftime("%Y-%m-%d %H:%M:%S GMT%z")+" ("+datetime.datetime.now(datetime.timezone.utc).astimezone().tzname()+")")
yesterday=now+relativedelta(days=-1)

time.sleep(1)
lastmonth=yesterday + relativedelta(months=-1)
lastmonth=lastmonth+relativedelta(days=1)
print("This bill covers the power consumption from: "+lastmonth.strftime("%a, %d %b %Y to ")+yesterday.strftime("%a, %d %b %Y"))

time.sleep(2)

print("The initial reading on your meter is "+initalreadingstr+" KWh.")
time.sleep(2)
print("The final reading on your meter (as of yesterday) is "+finalreadingstr+" KWh.")

bill = calcbill(finalreading - initalreading)

displaybill=round(bill,2)

print("The fee for the KWh of power consumed is ${:.2f}".format(displaybill))
time.sleep(2)
billtax = (bill * tax /100)

displaytax=round(billtax+0.0005,2)

print("The tax is ${:.2f}".format(displaytax))
time.sleep(2)

finalbill=bill+billtax
finalbill=round(finalbill+0.001,2)
print("The total power bill is ${:.2f}".format(finalbill))
time.sleep(2)
print("Thank you for allowing us to serve you. We appreciate your payment.")
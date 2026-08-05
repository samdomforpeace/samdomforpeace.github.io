#Piecewise function project: Programming part - George Holsinger

from datetime import datetime
import pytz
  

converted = pytz.timezone('US/Eastern')
  

dateTimeObj = datetime.now(converted)
# print(dateTimeObj.strftime('%a %b %Y %H:%M:%S %Z %z'))
time_of_day = dateTimeObj.strftime('%p')
evening = dateTimeObj.strftime('%H')
if time_of_day == 'PM':
  daytime = 'afternoon'
elif time_of_day == 'PM' and time_of_day >= 16:
  daytime = 'evening'
elif time_of_day == 'AM':
  daytime = 'morning'

fname = input('First name: ')
lname = input('Last name: ')

#Calculations for math project

def bracket_1(income):
  tax = income * .1
  return tax

def bracket_2(income):
  tax = income * .12 - 220
  return tax

def bracket_3(income):
  tax = income * .22 - 4692.5
  return tax

def bracket_4(income):
  tax = income * .24 - 6600
  return tax

def bracket_5(income):
  tax = income * .32 - 21168
  return tax

def bracket_6(income):
  tax = income * .35 - 28105.5
  return tax

def bracket_7(income):
  tax = income * .37 - 39668
  return tax


def main():
  t_income = float(input('Taxable Income: $'))

  while t_income < 0:
    t_income = float(input(('Invalid input. Please input number 0 or greater: ')))
    
  if t_income <= 11000:
    tax = bracket_1(t_income)
  elif t_income <= 44725:
    tax = bracket_2(t_income)
  elif t_income <= 95375:
    tax = bracket_3(t_income)
  elif t_income <= 182100:
    tax = bracket_4(t_income)
  elif t_income <= 231250:
    tax = bracket_5(t_income)
  elif t_income <= 578125:
    tax = bracket_6(t_income)
  elif t_income > 578125:
    tax = bracket_7(t_income)


  
  print(f'\n\n\nGood {daytime} {fname} {lname}. This is your Income Tax Statement printed today: ', end='')
  print(dateTimeObj.strftime('%a %b %d %Y %H:%M:%S %Z %z'))
  print(f'This tax statement is for income earned during 2022 year.\n\nYou are filing single.\nYour taxable income is ${t_income:,.2f}\nThe federal income tax of your taxable income is ${tax:,.2f}\nThank you for allowing us to calculate your federal tax.\nWe would apreciate if you let us file your tax return.')



main()


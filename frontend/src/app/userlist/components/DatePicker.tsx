import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Roboto,Inter } from 'next/font/google'
import { GlobalContextProvider } from '@/app/context/store'
const roboto = Roboto({style:"normal",subsets:[],weight:"400"})
const inter = Inter({style:"normal",subsets:[],weight:"600"})
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isEqual,
  isToday,
  parse,
  startOfToday,
} from 'date-fns'
import {  useState } from 'react'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DatePicker({setDatePicker,setAtualUserEditin,atualUserEditing}:any) {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }


  return (
    <div className='w-[572px] h-[313px] flex flex-col justify-center mt-3'>
      <div className="flex items-center justify-between text-[#111928]">
          <button
              type="button"
              onClick={previousMonth}
              className=""
            >
              <ChevronLeftIcon className="w-5 h-5"  />
          </button>
          <h2 className="font-semibold text-gray-900">
            {format(firstDayCurrentMonth, 'MMM yyyy')}
          </h2>
          <button
            onClick={nextMonth}
            type="button"
            className=""
          >
            <ChevronRightIcon className="w-5 h-5"  />
          </button>
      </div>
      <div className="w-[252px] h-[204px] mx-auto">  
        <div className={`grid grid-cols-7 text-[12px] text-center text-[#6B7280] ${inter.className}`}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day) => (
            <div
              key={day.toString()}
            >
              <button
                type="button"
                onClick={() => {setSelectedDay(day);setAtualUserEditin({...atualUserEditing,hiring:format(day, 'yyyy-MM-dd')})}}
                className={classNames(
                  isEqual(day, selectedDay) && 'text-white',
                  isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    'bg-[#9747FF]',
                    
                  ' flex h-[30px] w-[36px] items-center justify-center rounded-[8px]'
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </button>

            </div>
          ))}
      </div>
      <div>
      <div className='flex mt-8 justify-end w-full '>
        <div onClick={()=>setDatePicker(false)} className={`${roboto.className} hover:cursor-pointer w-[99px] mr-6 h-[44px] py-[7px] text-[16px] px-[15px] border border-[#000] flex justify-center items-center rounded-[20px]`}>Cancel</div>
        <div onClick={()=>setDatePicker(false)} className={`${roboto.style.fontFamily} hover:cursor-pointer text-[16px] text-white bg-[#9747FF] w-[210px] h-[44px] rounded-[20px] flex justify-center items-center`}>Ok</div>
      </div>
      </div>
      </div>
    </div>
  )
}
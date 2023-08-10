import React, { useState } from 'react';
import { Inter, Roboto } from 'next/font/google';
import { useDeleteUser } from '@/app/hooks/useDeleteUser';
import { GlobalContextProvider, useGlobalContext } from '@/app/context/store';
import { EDIT_USER_TYPE } from '@/app/context/typesPages';
import { NEW_VACANTY_TYPE } from '@/app/context/typesVacantis';
import { useDeleteVacanty } from '@/app/hooks/useDeleteVacanty';

const roboto = Roboto({weight: "500",subsets: ["latin"], style: "normal"})
const inter = Inter({weight: "400",subsets: ["latin"],style: "normal"})

export interface User {
  _id: string,
  name: string,
  start: string,
  end: string,
  days: number,
  imageUrl: string,
  userName: string,
  createdAt: string,
  __v: number,  
  deleteOfState: (id: string) => void;
}


const UserRow: React.FC<User> = (props:User) => {
  const [isSelected,setIsSelected] = useState(false)
  const [rowSelected,setRowSelected] = useState(false)
  const [modalDelete,setModalDelete] = useState(false)
  const {setDashboardPage,setTextNavTop,} = useGlobalContext()
  
  // refatorar depois
  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
  };
  const handleRowChange = () => {
    setRowSelected(!rowSelected);
  };
  


  return (
    <>
    <div className={`flex items-center ${roboto.className}`}>
      <div className="flex hover:cursor-pointer border-b h-checkbox-height border-borderRow w-58px items-center justify-center">
        <input checked={isSelected}  onChange={handleCheckboxChange} type="checkbox" className='form-checkbox border border-borderRow text-blue-500 rounded transition duration-300  transform scale-150'/>
      </div>
      <div className='flex items-center h-nav-aside w-profile border-b border-borderRow'>
        <img 
          src={props.imageUrl} alt="" 
          className='w-9 rounded-full'  
        />
      </div>
      <div className='flex relative justify-between items-center h-nav-aside w-nome border-b border-borderRow'>
        <div>{props.userName}</div> 
      </div>
      <div className='flex items-center h-nav-aside w-birth border-b border-borderRow'>{props.days}</div>
    
      <div className='flex  hover:cursor-pointer justify-center items-center h-nav-aside w-status border-b border-borderRow'>
        {
          isSelected ?
          <div onClick={handleCheckboxChange}>
            <svg  width="64" height="27" viewBox="0 0 64 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.200684" y="0.5" width="63" height="26" rx="13" fill="#DC8535" fillOpacity="0.17"/>
            <path d="M17.0913 15.2598H18.8003C18.7456 15.9115 18.5633 16.4925 18.2534 17.0029C17.9435 17.5088 17.5083 17.9076 16.9478 18.1992C16.3872 18.4909 15.7059 18.6367 14.9038 18.6367C14.2886 18.6367 13.7349 18.5273 13.2427 18.3086C12.7505 18.0853 12.3289 17.7708 11.978 17.3652C11.6271 16.9551 11.3582 16.4606 11.1714 15.8818C10.9891 15.3031 10.8979 14.6559 10.8979 13.9404V13.1133C10.8979 12.3978 10.9914 11.7507 11.1782 11.1719C11.3696 10.5931 11.6431 10.0986 11.9985 9.68848C12.354 9.27376 12.7801 8.95703 13.2769 8.73828C13.7782 8.51953 14.341 8.41016 14.9653 8.41016C15.7583 8.41016 16.4282 8.55599 16.9751 8.84766C17.522 9.13932 17.9458 9.54264 18.2466 10.0576C18.5519 10.5726 18.7388 11.1628 18.8071 11.8281H17.0981C17.0526 11.3997 16.9523 11.0329 16.7974 10.7275C16.647 10.4222 16.4237 10.1898 16.1274 10.0303C15.8312 9.86621 15.4438 9.78418 14.9653 9.78418C14.5734 9.78418 14.2316 9.8571 13.9399 10.0029C13.6483 10.1488 13.4045 10.363 13.2085 10.6455C13.0125 10.9281 12.8644 11.2767 12.7642 11.6914C12.6685 12.1016 12.6206 12.571 12.6206 13.0996V13.9404C12.6206 14.4417 12.6639 14.8975 12.7505 15.3076C12.8416 15.7132 12.9784 16.0618 13.1606 16.3535C13.3475 16.6452 13.5845 16.8708 13.8716 17.0303C14.1587 17.1898 14.5028 17.2695 14.9038 17.2695C15.3914 17.2695 15.7856 17.1921 16.0864 17.0371C16.3918 16.8822 16.6219 16.6566 16.7769 16.3604C16.9364 16.0596 17.0412 15.6927 17.0913 15.2598ZM24.3647 17.0166V13.4893C24.3647 13.2249 24.3169 12.9971 24.2212 12.8057C24.1255 12.6143 23.9797 12.4661 23.7837 12.3613C23.5923 12.2565 23.3507 12.2041 23.0591 12.2041C22.7902 12.2041 22.5578 12.2497 22.3618 12.3408C22.1659 12.432 22.0132 12.555 21.9038 12.71C21.7944 12.8649 21.7397 13.0404 21.7397 13.2363H20.0991C20.0991 12.9447 20.1698 12.6621 20.311 12.3887C20.4523 12.1152 20.6574 11.8714 20.9263 11.6572C21.1951 11.443 21.5164 11.2744 21.8901 11.1514C22.2638 11.0283 22.6831 10.9668 23.1479 10.9668C23.7039 10.9668 24.1961 11.0602 24.6245 11.2471C25.0575 11.4339 25.397 11.7165 25.6431 12.0947C25.8937 12.4684 26.019 12.9378 26.019 13.5029V16.791C26.019 17.1283 26.0418 17.4313 26.0874 17.7002C26.1375 17.9645 26.2082 18.1947 26.2993 18.3906V18.5H24.6108C24.5334 18.3223 24.4718 18.0967 24.4263 17.8232C24.3853 17.5452 24.3647 17.2764 24.3647 17.0166ZM24.604 14.002L24.6177 15.0205H23.4351C23.1297 15.0205 22.8608 15.0501 22.6284 15.1094C22.396 15.1641 22.2023 15.2461 22.0474 15.3555C21.8924 15.4648 21.7762 15.597 21.6987 15.752C21.6213 15.9069 21.5825 16.0824 21.5825 16.2783C21.5825 16.4743 21.6281 16.6543 21.7192 16.8184C21.8104 16.9779 21.9425 17.1032 22.1157 17.1943C22.2935 17.2855 22.5076 17.3311 22.7583 17.3311C23.0955 17.3311 23.3895 17.2627 23.6401 17.126C23.8953 16.9847 24.0959 16.8138 24.2417 16.6133C24.3875 16.4082 24.465 16.2145 24.4741 16.0322L25.0073 16.7637C24.9526 16.9505 24.8592 17.151 24.7271 17.3652C24.5949 17.5794 24.4217 17.7845 24.2075 17.9805C23.9979 18.1719 23.745 18.3291 23.4487 18.4521C23.1571 18.5752 22.8198 18.6367 22.437 18.6367C21.9539 18.6367 21.5233 18.541 21.145 18.3496C20.7668 18.1536 20.4705 17.8916 20.2563 17.5635C20.0422 17.2308 19.9351 16.8548 19.9351 16.4355C19.9351 16.0436 20.008 15.6973 20.1538 15.3965C20.3042 15.0911 20.5229 14.8359 20.8101 14.6309C21.1017 14.4258 21.4572 14.2708 21.8765 14.166C22.2957 14.0566 22.7743 14.002 23.312 14.002H24.604ZM29.3755 12.6826V18.5H27.728V11.1035H29.2798L29.3755 12.6826ZM29.0815 14.5283L28.5483 14.5215C28.5529 13.9974 28.6258 13.5166 28.7671 13.0791C28.9129 12.6416 29.1134 12.2656 29.3687 11.9512C29.6284 11.6367 29.9383 11.3952 30.2983 11.2266C30.6584 11.0534 31.0594 10.9668 31.5015 10.9668C31.8569 10.9668 32.1782 11.0169 32.4653 11.1172C32.757 11.2129 33.0054 11.3701 33.2104 11.5889C33.4201 11.8076 33.5796 12.0924 33.689 12.4434C33.7983 12.7897 33.853 13.2158 33.853 13.7217V18.5H32.1987V13.7148C32.1987 13.3594 32.1463 13.0791 32.0415 12.874C31.9412 12.6644 31.7931 12.5163 31.5972 12.4297C31.4058 12.3385 31.1665 12.293 30.8794 12.293C30.5968 12.293 30.3439 12.3522 30.1206 12.4707C29.8973 12.5892 29.7082 12.751 29.5532 12.9561C29.4028 13.1611 29.2866 13.3981 29.2046 13.667C29.1226 13.9359 29.0815 14.223 29.0815 14.5283ZM38.5562 17.3242C38.825 17.3242 39.0666 17.2718 39.2808 17.167C39.4995 17.0576 39.675 16.9072 39.8071 16.7158C39.9438 16.5244 40.019 16.3034 40.0327 16.0527H41.5845C41.5754 16.5312 41.4341 16.9665 41.1606 17.3584C40.8872 17.7503 40.5249 18.0625 40.0737 18.2949C39.6226 18.5228 39.1235 18.6367 38.5767 18.6367C38.0116 18.6367 37.5194 18.541 37.1001 18.3496C36.6808 18.1536 36.3322 17.8848 36.0542 17.543C35.7762 17.2012 35.5666 16.807 35.4253 16.3604C35.2886 15.9137 35.2202 15.4352 35.2202 14.9248V14.6855C35.2202 14.1751 35.2886 13.6966 35.4253 13.25C35.5666 12.7988 35.7762 12.4023 36.0542 12.0605C36.3322 11.7188 36.6808 11.4521 37.1001 11.2607C37.5194 11.0648 38.0093 10.9668 38.5698 10.9668C39.1623 10.9668 39.6818 11.0853 40.1284 11.3223C40.575 11.5547 40.9259 11.8805 41.1812 12.2998C41.4409 12.7145 41.5754 13.1976 41.5845 13.749H40.0327C40.019 13.4756 39.9507 13.2295 39.8276 13.0107C39.7091 12.7874 39.5405 12.6097 39.3218 12.4775C39.1076 12.3454 38.8501 12.2793 38.5493 12.2793C38.2166 12.2793 37.9409 12.3477 37.7222 12.4844C37.5034 12.6165 37.3325 12.7988 37.2095 13.0312C37.0864 13.2591 36.9976 13.5166 36.9429 13.8037C36.8927 14.0863 36.8677 14.3802 36.8677 14.6855V14.9248C36.8677 15.2301 36.8927 15.5264 36.9429 15.8135C36.993 16.1006 37.0796 16.3581 37.2026 16.5859C37.3302 16.8092 37.5034 16.9893 37.7222 17.126C37.9409 17.2581 38.2189 17.3242 38.5562 17.3242ZM46.1099 18.6367C45.563 18.6367 45.0685 18.5479 44.6265 18.3701C44.189 18.1878 43.8153 17.9349 43.5054 17.6113C43.2 17.2878 42.9653 16.9072 42.8013 16.4697C42.6372 16.0322 42.5552 15.5605 42.5552 15.0547V14.7812C42.5552 14.2025 42.6395 13.6784 42.8081 13.209C42.9767 12.7396 43.2114 12.3385 43.5122 12.0059C43.813 11.6686 44.1685 11.4111 44.5786 11.2334C44.9888 11.0557 45.4331 10.9668 45.9116 10.9668C46.4403 10.9668 46.9028 11.0557 47.2993 11.2334C47.6958 11.4111 48.0239 11.6618 48.2837 11.9854C48.548 12.3044 48.744 12.6849 48.8716 13.127C49.0037 13.569 49.0698 14.0566 49.0698 14.5898V15.2939H43.355V14.1113H47.4429V13.9814C47.4338 13.6852 47.3745 13.4072 47.2651 13.1475C47.1603 12.8877 46.9985 12.6781 46.7798 12.5186C46.561 12.359 46.2694 12.2793 45.9048 12.2793C45.6313 12.2793 45.3875 12.3385 45.1733 12.457C44.9637 12.571 44.7882 12.7373 44.647 12.9561C44.5057 13.1748 44.3963 13.4391 44.3188 13.749C44.2459 14.0544 44.2095 14.3984 44.2095 14.7812V15.0547C44.2095 15.3783 44.2528 15.679 44.3394 15.957C44.4305 16.2305 44.5627 16.4697 44.7358 16.6748C44.909 16.8799 45.1187 17.0417 45.3647 17.1602C45.6108 17.2741 45.8911 17.3311 46.2056 17.3311C46.6021 17.3311 46.9552 17.2513 47.2651 17.0918C47.575 16.9323 47.8439 16.7067 48.0718 16.415L48.9399 17.2559C48.7804 17.4883 48.5731 17.7116 48.3179 17.9258C48.0627 18.1354 47.7505 18.3063 47.3813 18.4385C47.0168 18.5706 46.5929 18.6367 46.1099 18.6367ZM52.1187 8V18.5H50.4644V8H52.1187Z" fill="#DC8535"/>
            </svg>
            </div>
           : <div onClick={handleCheckboxChange}>

            <svg width="54" height="27" viewBox="0 0 54 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.200684" y="0.5" width="53" height="26" rx="13" fill="#28A745" fillOpacity="0.17"/>
              <path d="M14.104 18.5H11.978L11.9917 17.1396H14.104C14.7192 17.1396 15.2342 17.0052 15.6489 16.7363C16.0682 16.4674 16.3826 16.0824 16.5923 15.5811C16.8065 15.0798 16.9136 14.4827 16.9136 13.79V13.25C16.9136 12.7122 16.8521 12.236 16.729 11.8213C16.6105 11.4066 16.4328 11.0579 16.1958 10.7754C15.9634 10.4928 15.6763 10.2786 15.3345 10.1328C14.9972 9.98698 14.6076 9.91406 14.1655 9.91406H11.937V8.54688H14.1655C14.8263 8.54688 15.4302 8.65853 15.9771 8.88184C16.5239 9.10059 16.9956 9.41732 17.3921 9.83203C17.7931 10.2467 18.1007 10.7435 18.3149 11.3223C18.5291 11.901 18.6362 12.5482 18.6362 13.2637V13.79C18.6362 14.5055 18.5291 15.1527 18.3149 15.7314C18.1007 16.3102 17.7931 16.807 17.3921 17.2217C16.991 17.6318 16.5125 17.9486 15.9565 18.1719C15.4051 18.3906 14.7876 18.5 14.104 18.5ZM12.9282 8.54688V18.5H11.2124V8.54688H12.9282ZM19.8804 14.8838V14.7266C19.8804 14.1934 19.9578 13.6989 20.1128 13.2432C20.2677 12.7829 20.491 12.3841 20.7827 12.0469C21.0789 11.7051 21.439 11.4408 21.8628 11.2539C22.2912 11.0625 22.7743 10.9668 23.312 10.9668C23.8543 10.9668 24.3374 11.0625 24.7612 11.2539C25.1896 11.4408 25.5519 11.7051 25.8481 12.0469C26.1444 12.3841 26.37 12.7829 26.5249 13.2432C26.6799 13.6989 26.7573 14.1934 26.7573 14.7266V14.8838C26.7573 15.417 26.6799 15.9115 26.5249 16.3672C26.37 16.8229 26.1444 17.2217 25.8481 17.5635C25.5519 17.9007 25.1919 18.165 24.7681 18.3564C24.3442 18.5433 23.8634 18.6367 23.3257 18.6367C22.7834 18.6367 22.298 18.5433 21.8696 18.3564C21.4458 18.165 21.0858 17.9007 20.7896 17.5635C20.4933 17.2217 20.2677 16.8229 20.1128 16.3672C19.9578 15.9115 19.8804 15.417 19.8804 14.8838ZM21.5278 14.7266V14.8838C21.5278 15.2165 21.562 15.5309 21.6304 15.8271C21.6987 16.1234 21.8058 16.3831 21.9517 16.6064C22.0975 16.8298 22.2843 17.0052 22.5122 17.1328C22.7401 17.2604 23.0112 17.3242 23.3257 17.3242C23.631 17.3242 23.8953 17.2604 24.1187 17.1328C24.3465 17.0052 24.5334 16.8298 24.6792 16.6064C24.825 16.3831 24.9321 16.1234 25.0005 15.8271C25.0734 15.5309 25.1099 15.2165 25.1099 14.8838V14.7266C25.1099 14.3984 25.0734 14.0885 25.0005 13.7969C24.9321 13.5007 24.8228 13.2386 24.6724 13.0107C24.5265 12.7829 24.3397 12.6051 24.1118 12.4775C23.8885 12.3454 23.6219 12.2793 23.312 12.2793C23.0021 12.2793 22.7332 12.3454 22.5054 12.4775C22.2821 12.6051 22.0975 12.7829 21.9517 13.0107C21.8058 13.2386 21.6987 13.5007 21.6304 13.7969C21.562 14.0885 21.5278 14.3984 21.5278 14.7266ZM29.772 12.6826V18.5H28.1245V11.1035H29.6763L29.772 12.6826ZM29.478 14.5283L28.9448 14.5215C28.9494 13.9974 29.0223 13.5166 29.1636 13.0791C29.3094 12.6416 29.5099 12.2656 29.7651 11.9512C30.0249 11.6367 30.3348 11.3952 30.6948 11.2266C31.0549 11.0534 31.4559 10.9668 31.8979 10.9668C32.2534 10.9668 32.5747 11.0169 32.8618 11.1172C33.1535 11.2129 33.4019 11.3701 33.6069 11.5889C33.8166 11.8076 33.9761 12.0924 34.0854 12.4434C34.1948 12.7897 34.2495 13.2158 34.2495 13.7217V18.5H32.5952V13.7148C32.5952 13.3594 32.5428 13.0791 32.438 12.874C32.3377 12.6644 32.1896 12.5163 31.9937 12.4297C31.8022 12.3385 31.563 12.293 31.2759 12.293C30.9933 12.293 30.7404 12.3522 30.5171 12.4707C30.2938 12.5892 30.1047 12.751 29.9497 12.9561C29.7993 13.1611 29.6831 13.3981 29.6011 13.667C29.519 13.9359 29.478 14.223 29.478 14.5283ZM39.1919 18.6367C38.645 18.6367 38.1506 18.5479 37.7085 18.3701C37.271 18.1878 36.8973 17.9349 36.5874 17.6113C36.2821 17.2878 36.0474 16.9072 35.8833 16.4697C35.7192 16.0322 35.6372 15.5605 35.6372 15.0547V14.7812C35.6372 14.2025 35.7215 13.6784 35.8901 13.209C36.0588 12.7396 36.2935 12.3385 36.5942 12.0059C36.895 11.6686 37.2505 11.4111 37.6606 11.2334C38.0708 11.0557 38.5151 10.9668 38.9937 10.9668C39.5223 10.9668 39.9849 11.0557 40.3813 11.2334C40.7778 11.4111 41.106 11.6618 41.3657 11.9854C41.63 12.3044 41.826 12.6849 41.9536 13.127C42.0858 13.569 42.1519 14.0566 42.1519 14.5898V15.2939H36.437V14.1113H40.5249V13.9814C40.5158 13.6852 40.4565 13.4072 40.3472 13.1475C40.2424 12.8877 40.0806 12.6781 39.8618 12.5186C39.6431 12.359 39.3514 12.2793 38.9868 12.2793C38.7134 12.2793 38.4696 12.3385 38.2554 12.457C38.0457 12.571 37.8703 12.7373 37.729 12.9561C37.5877 13.1748 37.4784 13.4391 37.4009 13.749C37.328 14.0544 37.2915 14.3984 37.2915 14.7812V15.0547C37.2915 15.3783 37.3348 15.679 37.4214 15.957C37.5125 16.2305 37.6447 16.4697 37.8179 16.6748C37.991 16.8799 38.2007 17.0417 38.4468 17.1602C38.6929 17.2741 38.9731 17.3311 39.2876 17.3311C39.6841 17.3311 40.0373 17.2513 40.3472 17.0918C40.6571 16.9323 40.9259 16.7067 41.1538 16.415L42.022 17.2559C41.8625 17.4883 41.6551 17.7116 41.3999 17.9258C41.1447 18.1354 40.8325 18.3063 40.4634 18.4385C40.0988 18.5706 39.675 18.6367 39.1919 18.6367Z" fill="#28A745"/>
            </svg>
           </div>
        }
      </div>
      <div
        
        className={`flex relative hover:cursor-pointer justify-center items-center h-nav-aside w-action border-b border-borderRow ${rowSelected ? 'bg-rowSelected': null}`}>
        <div onClick={handleRowChange} className='w-full h-full flex justify-center items-center' >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.00001 8.33325C4.08334 8.33325 3.33334 9.08325 3.33334 9.99992C3.33334 10.9166 4.08334 11.6666 5.00001 11.6666C5.91668 11.6666 6.66668 10.9166 6.66668 9.99992C6.66668 9.08325 5.91668 8.33325 5.00001 8.33325ZM15 8.33325C14.0833 8.33325 13.3333 9.08325 13.3333 9.99992C13.3333 10.9166 14.0833 11.6666 15 11.6666C15.9167 11.6666 16.6667 10.9166 16.6667 9.99992C16.6667 9.08325 15.9167 8.33325 15 8.33325ZM10 8.33325C9.08334 8.33325 8.33334 9.08325 8.33334 9.99992C8.33334 10.9166 9.08334 11.6666 10 11.6666C10.9167 11.6666 11.6667 10.9166 11.6667 9.99992C11.6667 9.08325 10.9167 8.33325 10 8.33325Z" fill="#9747FF"/>
          </svg>
        </div>
        {
          rowSelected ? 
          <>
            <div onClick={()=>setRowSelected(false)} className='w-[100vw] fixed h-[100vh] z-20 top-0 left-0'>

            </div>
            <div className=' flex items-center border rounded-md border-[#9747FF] justify-center flex-col absolute bg-[#FFF] z-50 top-0 right-0 w-[119px] h-[80px] text-center '>
              <div  
                onClick={
                  ()=>{
                    useDeleteVacanty(props._id)
                    props.deleteOfState(props._id)
                  }
                } 
                className={`flex items-center justify-center text-[#9747FF] text-[20px] w-[full] h-[full] ${inter.className}`}
              >
                Deletar Férias
              </div>
            </div>
          </>
          : null 
        }
      </div>
    </div>
    </>
  );
};

export default UserRow;

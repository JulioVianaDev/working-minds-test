import React from 'react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  goToPage: (pageNumber: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  setUsersPerPage: (perPage: number) => void,
  usersPerPage:number
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  goToPage,
  nextPage,
  previousPage,
  setUsersPerPage,
  usersPerPage,
}) => {

  const decreaseDisplay = () => {
    const newUsersPerPage = Math.max(1, usersPerPage - 1);
    setUsersPerPage(newUsersPerPage);
  };
  const increaseDisplay = () => {
    const newUsersPerPage = Math.max(1, usersPerPage + 1);
    setUsersPerPage(newUsersPerPage);
  };
  return (
    <div className='flex items-center'>
      <div className='text-footer-text font-features text-letterFooter'>Display</div>
        <div className='relative'>
          <div className='absolute top-1 right-1 flex flex-col'>
            <div className='' onClick={increaseDisplay}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.90834 3.61172L2.0599 8.07422C1.91693 8.24063 2.04584 8.48438 2.2767 8.48438H9.97357C10.2044 8.48438 10.3333 8.24063 10.1904 8.07422L6.34193 3.61172C6.23178 3.48398 6.0185 3.48398 5.90834 3.61172Z" fill="#6C757D"/>
              </svg>
            </div>
            <div onClick={decreaseDisplay}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.78334 8.38828L1.9349 3.92578C1.79193 3.75937 1.92084 3.51562 2.1517 3.51562L9.84857 3.51562C10.0794 3.51562 10.2083 3.75937 10.0654 3.92578L6.21693 8.38828C6.10678 8.51602 5.8935 8.51602 5.78334 8.38828Z" fill="#6C757D"/>
              </svg>
            </div>
          </div>
          <input
            type="number"
            min={1}
            className='border rounded-4px pl-padding-filter h-30px w-51px'
            value={usersPerPage}
            onChange={(e) => setUsersPerPage(Number(e.target.value))}
          />
        </div>
      <div className='flex items-center justify-center w-30px ml-1 h-30px rounded-2px bg-iconsArrow' onClick={() => previousPage()}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L6 8L10 4" stroke="#343A40" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className='flex items-center justify-center w-30px ml-1 h-30px rounded-2px bg-currentFilter text-white' >{currentPage}</div>
      <div className='flex items-center justify-center w-30px ml-1 h-30px rounded-2px bg-iconsArrow' onClick={() => nextPage()}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="#343A40" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default PaginationControls;

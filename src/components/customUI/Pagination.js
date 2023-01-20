import React, {useState} from 'react';
import {Pagination, PaginationItem} from "@mui/material";

const CustomPagination = ({count}) => {
    const [page, setPage] = useState(1);
    const handleChange = (e, page) => {
        setPage(page)
    }
    return (
        <div className='pagination'>
            <Pagination
                count={count}
                boundaryCount={1}
                siblingCount={page < 3 ? 0 : 1}
                onChange={handleChange}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        last='Last'
                        page={item.page === count ? 'Last' : item.page || '...'}
                    />
                )}
                hidePrevButton
                hideNextButton />
        </div>
    );
};

export default CustomPagination;
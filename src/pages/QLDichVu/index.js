import React, { useState } from 'react';
import './qldv.css';
import ListDV from './ListDV';
import DetailDV from './DetailDV';
import XoaDV from './XoaDV';

function QLDV(params) {
    const [detailDV, setDetailDV] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const fakedata1 = [
        {
            id: 1,
            name: 'DV1',
            time: '30p',
            price: 500000,
            describe: 'mô tả DV1',
            dsNVThucHien: [
                {
                    id: 12,
                    fullName: 'Lê Thị Phong'
                },
                {
                    id: 12,
                    fullName: 'Lê Thị Phong'
                },
                {
                    id: 12,
                    fullName: 'Lê Thị Phong'
                },
            ],
        },
    ]

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setDetailDV(true);
    };

    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

    const handleCancelDelete = () => {
        // Người dùng chọn hủy
        setConfirmationDialogOpen(false);
    };

    const handleConfirmDelete = () => {
        alert('Bạn đã xóa dịch vụ thành công');
        // Người dùng chọn xác nhận xóa, thực hiện xóa mục tại đây
        setConfirmationDialogOpen(false);
    };

    const handleClickXoa = (item) => {
        setConfirmationDialogOpen(true);
    };

    const goBack = () => {
        setDetailDV(false);
        setSelectedItem(null);
    }

    return (
        <div id='QLDV'>
            <ListDV data={fakedata1}
                handleItemClick={handleItemClick}
                handleDeleteClick={handleClickXoa}
            />
            {detailDV ? (
                <div id='detailDV'>
                    <DetailDV item={selectedItem} goBack={goBack} />
                </div>) : null}
            {isConfirmationDialogOpen ? (<div id='xoa'>
                <XoaDV
                    isOpen={isConfirmationDialogOpen}
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                />
            </div>) : null}
        </div>
    )
}

export default QLDV;

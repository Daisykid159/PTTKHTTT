import React from 'react';
import './qldv.css'
import Search from '~/pages/Search';

function QLDV(params) {

    const fakedata1 = [
        {
            id: 1,
            name: 'DV1',
            time: '30p',
            price: 500000,
        }
    ]

    return (
        <div id='QLDV'>
            <div className='TextQldv'>QUẢN LÝ DỊCH VỤ</div>
            <Search />
            <div>Danh sách dịch vụ</div>
            <table>
                <thead>
                    <th className='stt'>STT</th>
                    <th className='nameDV'>Tên dịch vụ</th>
                    <th className='gia'>Giá</th>
                    <th className='time'>Thời gian</th>
                    <th className='sua'></th>
                    <th className='xoa'></th>
                    <th className='chiTiet'></th>
                </thead>
                <tbody>
                    <tr>
                        <td>{fakedata1[0].id}</td>
                        <td>{fakedata1[0].name}</td>
                        <td>{fakedata1[0].price}</td>
                        <td>{fakedata1[0].time}</td>
                        <td>Sửa</td>
                        <td>Xoá</td>
                        <td>Chi tiết</td>
                    </tr>
                </tbody>
            </table>
            <div>Thêm dịch vụ</div>
        </div>
    )
}

export default QLDV;

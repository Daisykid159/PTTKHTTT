import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './header.css';
import Home from '../Home';
import NhanKhach from '../NhanKhach';
import QLDV from '../QLDichVu';
import ThanhToan from '../ThanhToan';

function Header() {
    return (
        <Router>
            <div id='header'>
                <ul className='listItem'>
                    <li className='item'>
                        <Link to="pages/Home">Trang chủ</Link>
                    </li>
                    <li className='item'>
                        <Link to="pages/QlDichVu">QLDV</Link>
                    </li>
                    <li className='item'>
                        <Link to="pages/NhanKhach">Nhận Khách</Link>
                    </li>
                    <li className='item'>
                        <Link to="pages/ThanhToan">Thanh Toán</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="pages/Home" element={<Home />} />
                    <Route path="pages/QlDichVu" element={<QLDV />} />
                    <Route path="pages/NhanKhach" element={<NhanKhach />} />
                    <Route path="pages/ThanhToan" element={<ThanhToan />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Header;

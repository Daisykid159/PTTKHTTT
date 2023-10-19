import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './header.css';
import Home from '../Home';
import NhanKhach from '../NhanKhach';
import QLDV from '../QLDichVu';
import ThanhToan from '../ThanhToan';
import Footer from '~/pages/Footer';

function Header() {
    return (
        <Router>
            <div id='header'>
                <ul className='listItem'>
                    <li className='item'>
                        <Link to="pages/Home" className='link'>Trang chủ</Link>
                    </li>
                    <li className='item'>
                        <Link to="pages/QlDichVu" className='link'>QLDV</Link>
                    </li>
                    <li className='item'>
                        <Link to="pages/NhanKhach" className='link'>Nhận Khách</Link>
                    </li>
                    <li className='item'>
                        <Link to="pages/ThanhToan" className='link'>Thanh Toán</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="pages/Home" element={<Home />} />
                    <Route path="pages/QlDichVu" element={<QLDV />} />
                    <Route path="pages/NhanKhach" element={<NhanKhach />} />
                    <Route path="pages/ThanhToan" element={<ThanhToan />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default Header;

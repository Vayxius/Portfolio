import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import CV from '../CV';
import Project from '../Project';
import '../../assets/css/style.css';
import { Sidebar } from '../../components';

const MainApp = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className='container bg-slate-200'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/curriculum-vitae">
            <Route index element={<CreateBlog />} />
            <Route path=":id" element={<CreateBlog />} />
          </Route> */}
          {/* <Route path="/detail-blog/:id" element={<DetailBlog />} /> */}
          <Route path="/curriculum-vitae" element={<CV />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </div>
  )
}

export default MainApp
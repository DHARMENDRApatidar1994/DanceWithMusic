import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Eventdetail from './component/Eventdetail'
import Detailform from './component/Detailform'
import Contact from './Pages/Contact'
import MainMusic from './Pages/MainMusic'
import MainDance from './Pages/MainDance'
import Bhopal from './component/Bhopal'
import Groove from './component/Groove'
import Login from './admin/Login';
import Admin from './admin/Admin';
import AddSalsaEvent from './admin/AddSalsaEvent'
import AddBhopalEvent from './admin/AddBhopalEvent';
import AddGrooveEvent from './admin/AddGrooveEvent'
import AddMusicGallery from './admin/AddMusicGallery';
import AddDanceGallery from './admin/AddDanceGallery'
import AddHomePageVideos from './admin/AddHomePageVideos'
import AddDashboardEvent from './admin/AddDashboardEvent';
import DeleteHomePageVideo from './admin/DeleteHomePageVideo'
import DeleteMusicGalleryImage from './admin/DeleteMusicGalleryImage'
import DeleteDanceGalleryImage from './admin/DeleteDanceGalleryImage'
import DeleteDashboardEvents from './admin/DeleteDashboardEvents'
import Enquiry from './admin/Enquiry'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/salsa' element={<Eventdetail/>}/>
        <Route path='/bhopal' element={<Bhopal/>}/>
        <Route path='/groove' element={<Groove/>}/>
        <Route path='/Detailform/:id' element={<Detailform/>}/>
        <Route path='/Music' element={<MainMusic/>}/>
        <Route path='/Music/:openAt' element={<MainMusic/>}/>
        <Route path='/Dance' element={<MainDance/>}/>
        <Route path='/Dance/:openAt' element={<MainDance/>}/>
        <Route path='/Contact' element={<Contact/>}/>


        <Route path = '/admin' element = {<Login/>} />
        <Route path = '/admin/dashboard' element = {<Admin/>} />
        <Route path = '/admin/addSalsaEvent' element = {<AddSalsaEvent/>} />
        <Route path = '/admin/addBhopalEvent' element = {<AddBhopalEvent/>} />
        <Route path = '/admin/addGrooveEvent' element = {<AddGrooveEvent/>} />
        <Route path = '/admin/addMusicGallery' element = {<AddMusicGallery/>} />
        <Route path = '/admin/addDanceGallery' element = {<AddDanceGallery/>} />
        <Route path = '/admin/addHomePageVideo' element = {<AddHomePageVideos/>} />
        <Route path = '/admin/addDashboardEvent' element = {<AddDashboardEvent/>} />
        <Route path = '/admin/deleteDashboardEvent' element = {<DeleteDashboardEvents/>} />
        <Route path = '/admin/deleteHomePageVideos' element = {<DeleteHomePageVideo />} />
        <Route path = '/admin/deleteMusicGalleryImages' element = {<DeleteMusicGalleryImage />} />
        <Route path = '/admin/deleteDanceGalleryImages' element = {<DeleteDanceGalleryImage />} />
        <Route path = '/admin/enquiry' element = {<Enquiry />} />


      </Routes>
    </div>
  )
}

export default App

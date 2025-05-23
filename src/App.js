import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetail from './components/restaurants/RestaurantDetail';
import MainLayout from './components/layout/MainLayout';
import EmptyLayout from './components/layout/EmptyLayout';
import BookTable from './components/restaurants/BookTable';
import ScrollToTop from './components/common/ScrollToTop';
import ViewMenu from './components/restaurants/ViewMenu';
import CreateFood from './components/restaurants/CreateFood';
import EditFood from './components/restaurants/EditFood';

import Food from './components/restaurants/Food';
import BookingWeb from './components/booking/BookingWeb';
import BookingLayout from './components/layout/BookingLayout';
import HotelDetail from './components/hotels/HotelDetail';



function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/booktable/:id" element={<BookTable />} />
          <Route path="/viewmenu/:id" element={<ViewMenu />} />
          <Route path="/food/:restaurantId" element={<Food />} />
          <Route path="/editfood/:id" element={<EditFood />} />
          <Route path="/createfood/:id" element={<CreateFood />} />
        </Route>
        <Route element={<EmptyLayout />}>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Route>
        <Route element={<BookingLayout />}>
          <Route path="/" element={<BookingWeb />} />
          <Route path='/hotels' element={<HotelDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

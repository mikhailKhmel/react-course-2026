import MainLayout from './components/pages/main-layout/main-layout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import HomePage from './components/pages/home-page/home-page'
import RestaurantsLayout from './components/pages/restaurants/restaurants-layout/restaurants-layout'
import Providers from './providers'
import MenuList from './components/pages/restaurants/menu-list/menu-list'
import Reviews from './components/pages/restaurants/reviews/reviews'
import RestaurantView from './components/pages/restaurants/restaurant-view/restaurant-view'
import DishView from './components/pages/dishes/dish-view'

function App() {
    return (
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route
                            path='restaurants'
                            element={<RestaurantsLayout />}
                        >
                            <Route
                                path=':restaurantId'
                                element={<RestaurantView />}
                            >
                                <Route
                                    index
                                    element={<Navigate to='menu' replace />}
                                />
                                <Route path='menu' element={<MenuList />} />
                                <Route path='reviews' element={<Reviews />} />
                            </Route>
                        </Route>
                        <Route path='dishes'>
                            <Route path=':dishId' element={<DishView />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Providers>
    )
}

export default App

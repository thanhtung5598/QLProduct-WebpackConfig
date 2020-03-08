import React from 'react'
import HomePage from "./pages/HomePages/HomePage";
import NotFoundPage from "./pages/NotFoundPages/NotFoundPage";
import ProductListPage from "./pages/ProductListPages/ProductListPage";
import ProductActionPage from "./pages/ProductActionPages/productActionPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/products/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/products/:id/edit',
        exact: false,
        main: ({match,history}) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;
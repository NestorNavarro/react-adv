import { lazy } from 'react';

import NoLazy from '../01-lazyload/Pages/NoLazy';

type JSXComponent =  () => JSX.Element;

interface Route {
    to   : string,
    path : string,
    name : string,
    Component : React.LazyExoticComponent<JSXComponent> | JSXComponent,
};

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */  "../01-lazyload/Layout/LazyLayout"));

export const routes: Route[] = [
    {
        to : "/lazyload/",
        path : "/lazyload/*",
        Component : LazyLayout,
        name : "LazyLoad",
    },
    {
        to : "/no-lazy",
        path : "no-lazy",
        Component : NoLazy,
        name : "No Lazy",
    },
];
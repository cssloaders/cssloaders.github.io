export const LOADERS = [
  {
    name: 'circle',
    order: 1,
    length: 5,
    loadStyles: () => import('./circle').then(m => m.loadCircleStyles()),
  },
];

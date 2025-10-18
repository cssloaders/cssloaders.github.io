export const LOADERS = [
  {
    name: 'circle',
    order: 1,
    loadStyles: () => import('./circle').then((m) => m.loadCircleStyles()),
  },
  {
    name: 'bubble',
    order: 2,
    loadStyles: () => import('./bubble').then((m) => m.loadBubbleStyles()),
  },
  {
    name: 'rect',
    order: 3,
    loadStyles: () => import('./rect').then((m) => m.loadRectStyles()),
  },
];

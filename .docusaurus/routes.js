import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '327'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bbe'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '162'),
            routes: [
              {
                path: '/docs/module1/chapter1-introduction',
                component: ComponentCreator('/docs/module1/chapter1-introduction', '71e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter2-nodes-topics-services',
                component: ComponentCreator('/docs/module1/chapter2-nodes-topics-services', 'f72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter3-rclpy',
                component: ComponentCreator('/docs/module1/chapter3-rclpy', 'e57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter4-urdf',
                component: ComponentCreator('/docs/module1/chapter4-urdf', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter5-final-project',
                component: ComponentCreator('/docs/module1/chapter5-final-project', 'e64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/overview',
                component: ComponentCreator('/docs/module2/overview', 'a0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/overview',
                component: ComponentCreator('/docs/module3/overview', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/overview',
                component: ComponentCreator('/docs/module4/overview', 'b85'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

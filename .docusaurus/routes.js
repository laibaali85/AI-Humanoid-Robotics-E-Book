import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI-Humanoid-Robotics-E-Book/markdown-page',
    component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/markdown-page', '9c9'),
    exact: true
  },
  {
    path: '/AI-Humanoid-Robotics-E-Book/docs',
    component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs', 'dfd'),
    routes: [
      {
        path: '/AI-Humanoid-Robotics-E-Book/docs',
        component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs', '07c'),
        routes: [
          {
            path: '/AI-Humanoid-Robotics-E-Book/docs',
            component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs', '9be'),
            routes: [
              {
                path: '/AI-Humanoid-Robotics-E-Book/docs/module1/chapter1-introduction',
                component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs/module1/chapter1-introduction', '8d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-E-Book/docs/module1/chapter2-nodes-topics-services',
                component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs/module1/chapter2-nodes-topics-services', '4e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-E-Book/docs/module1/chapter3-rclpy',
                component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs/module1/chapter3-rclpy', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-E-Book/docs/module1/chapter4-urdf',
                component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs/module1/chapter4-urdf', '740'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-E-Book/docs/module1/chapter5-final-project',
                component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs/module1/chapter5-final-project', '7e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-E-Book/docs/module2/overview',
                component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs/module2/overview', '90a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-E-Book/docs/module3/overview',
                component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs/module3/overview', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-E-Book/docs/module4/overview',
                component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/docs/module4/overview', '810'),
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
    path: '/AI-Humanoid-Robotics-E-Book/',
    component: ComponentCreator('/AI-Humanoid-Robotics-E-Book/', 'd39'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

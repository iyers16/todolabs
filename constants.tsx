import { ProductInfo } from './types';

export const PRODUCTS: ProductInfo[] = [
  {
    id: 'vantage',
    name: 'Vantage',
    tagline: 'Real Estate Reasoning Agent',
    status: 'Beta',
    description: 'A spatial reasoning engine that ingests property walkthroughs and drone multimedia, allowing brokers & clients to query physical spaces organically.',
    features: [
      'Temporal-spatial video frame stitching',
      'Context retrieval via homography and SLAM',
      'Natural language spatial cue reasoning',
      'Automated multimedia context extraction'
    ]
  },
  {
    id: 'parallax',
    name: 'Parallax',
    tagline: 'SAR Command & Control Center',
    status: 'Beta',
    description: 'A coordination hub that aggregates live video feeds from field operators, automating command center roles through real-time SLAM and point-cloud synchronization.',
    features: [
      'Multi-node live video feed aggregation',
      'Real-time SLAM and point-cloud generation',
      'Automated operator-to-operator comms',
      'Heads-up display (HUD) situational awareness'
    ]
  },
  {
    id: 'etch',
    name: 'Etch',
    tagline: 'Agentic PCB Design Orchestration',
    status: 'Beta',
    description: 'A multi-agent workflow that deprecates monolithic CAD software, automating the transition from prompt to finished schema, PCB layout, and BOM in minutes.',
    features: [
      'Agentic orchestration of specialized nodes',
      'Automated schematic and layout synthesis',
      'Real-time BOM and price-tag generation',
      'Rapid iteration hardware development'
    ]
  }
];
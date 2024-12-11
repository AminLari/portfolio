// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AminLari', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['AminLari/gitprofile', 'AminLari/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mohammadamin Lari',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'aminlari',
    twitter: '',
    mastodon: '',
    researchGate: 'Mohammadamin-Lari',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.github.com/AminLari',
    phone: '',
    email: 'mohamadamin.lari@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C/C++',
    'Java',
    'MATLAB',
    'R',
    'ARM',
    'Arduino',
    'Web Programming',
    'HTML5',
    'CSS3',
    'JavaScript',
  ],
  experiences: [
    {
      company: 'University of British Columbia',
      position: 'Graduate Research Assistant',
      from: 'January 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Tehran-Ramian Transmission Lines',
      position: 'Instrumentation Engineer',
      from: 'April 2020',
      to: 'December 2020',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Advanced Learning Algorithms',
      body: 'DeepLearning.AI',
      year: 'November 2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/QKU5WUEHC2HB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course',
    },
    {
      name: 'Supervised Machine Learning: Regression and Classification',
      body: 'DeepLearning.AI',
      year: 'October 2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/HUUBWQREYR54?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    },
    {
      name: 'Cyber-Security in Cyber-Physical Systems',
      body: 'ICRoM',
      year: 'November 2021',
      link: '',
    },
    {
      name: 'Web Design and Programming',
      body: 'University of Tehran',
      year: 'August 2018',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of British Columbia',
      degree: 'Master of Applied Science - Electrical Engineering',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Amirkabir University of Technology',
      degree: 'Bachelor of Applied Science - Electrical Engineering',
      from: '2017',
      to: '2021',
    },
  ],
  publications: [
    {
      title: 'A Reputation-Based Distributed Controller Reconfiguration Algorithm for Misbehaving Agents in Networked Control Systems',
      conferenceName: '2021 9th RSI International Conference on Robotics and Mechatronics (ICRoM)',
      journalName: '',
      authors: 'Mohammadamin Lari, Iman Sharifi, Heidar Ali Talebi',
      link: 'https://ieeexplore.ieee.org/document/9663498',
      description:
        'In this paper, we propose a reputation-based algorithm for controller reconfiguration of misbehaving agents in Networked Control Systems (NCSs). The proposed controller is able to reject malicious data injections and maintain the desired performance of the system in presence of cyber-attacks. The effectiveness of our proposition is evaluated on a leader-follower vehicular platoon in presence of DoS and Replay attacks. Numerical simulation is provided and shows fast detection and isolation of misbehaving agents and steering them to a predefined safe location. A Consensus among well-behaving agents is achieved via the application of the reputation algorithm.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

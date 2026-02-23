import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Damien Guillaume',
    photoBackEmoji: '👨‍💼',
    title: {
      fr: 'Chef de produit et projet',
      en: 'Product & Project Manager',
    },
    subtitle: {
      fr: 'Formé au marketing, aux enjeux BtoB et BtoC, disponible immédiatement',
      en: 'Marketing & BtoB/BtoC expert, available immediately',
    },
    location: 'Saint-Germain-sur-Ille, France',
  },
  seo: {
    title: 'Damien Guillaume — Chef de produit et projet',
    description: 'CV interactif de Damien Guillaume, chef de produit et projet spécialisé en marketing, gestion de projet et innovation.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Damien Guillaume', href: 'https://www.linkedin.com/in/damien-guillaume-57185718/' },
    { type: 'email', label: 'dam.guillaume@gmail.com' },
    { type: 'phone', label: '+33 7 68 75 76 57' },
    { type: 'location', label: 'Saint-Germain-sur-Ille, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Courant (TOEIC 875)', en: 'Fluent (TOEIC 875)' } },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools' },
      type: 'badges',
      items: [
        { name: 'Microsoft Office' },
        { name: 'Adobe Lightroom' },
      ],
    },
    {
      title: { fr: 'Soft Skills', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Motivé, Empathique, Fast learner, Esprit analytique, Esprit d\'équipe, Parcours atypique, Force de proposition, Créatif, Curieux, Passionné', en: 'Motivated, Empathetic, Fast learner, Analytical mind, Team spirit, Atypical background, Proactive, Creative, Curious, Passionate' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'roger-briant',
      company: { fr: 'Roger Briant', en: 'Roger Briant' },
      role: { fr: 'Conseiller de vente Véhicules de Loisirs', en: 'Leisure Vehicles Sales Advisor' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2022 - Aujourd\'hui', en: '2022 - Present' },
      description: {
        fr: 'Vente de prestations d\'aménagements de véhicules et d\'accessoires de l\'univers du véhicule de loisirs. Relation client, maximisation du CA magasin, gestion des litiges, gestion des stocks et des commandes. Relations avec l\'atelier.',
        en: 'Sales of vehicle fitting services and leisure vehicle accessories. Customer relations, store turnover maximization, dispute management, stock and order management. Workshop coordination.',
      },
      techs: [],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Magasin spécialisé dans les véhicules de loisirs.',
          en: 'Store specialized in leisure vehicles.',
        },
        tasks: {
          fr: [
            'Vente de solutions solaires, électriques et de chauffage pour véhicules de loisirs.',
            'Gestion des stocks et des commandes.',
            'Coordination avec l\'atelier pour les aménagements.',
          ],
          en: [
            'Sales of solar, electrical and heating solutions for leisure vehicles.',
            'Stock and order management.',
            'Coordination with the workshop for vehicle fittings.',
          ],
        },
        env: {
          fr: 'Vente en magasin, gestion de stocks, relation client.',
          en: 'In-store sales, stock management, customer relations.',
        },
      },
    },
    {
      id: 'espace-culturel-fnac',
      company: { fr: 'Espace Culturel / Fnac', en: 'Espace Culturel / Fnac' },
      role: { fr: 'Conseiller de vente multimédia / Spécialiste photo', en: 'Multimedia Sales Advisor / Photo Specialist' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2015 - 2019', en: '2015 - 2019' },
      description: {
        fr: 'Gestion des rayons EGP (Informatique, Photo, Impression), refonte des rayons, partenariats et événements commerciaux.',
        en: 'Management of EGP departments (Computing, Photo, Printing), department redesign, partnerships and commercial events.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Grande surface culturelle.',
          en: 'Large cultural retail store.',
        },
        tasks: {
          fr: [
            'Gestion des rayons informatique, photo et impression.',
            'Refonte des espaces de vente.',
            'Organisation d\'événements commerciaux et partenariats.',
          ],
          en: [
            'Management of computing, photo and printing departments.',
            'Redesign of sales areas.',
            'Organization of commercial events and partnerships.',
          ],
        },
        env: {
          fr: 'Vente en magasin, gestion de rayons, organisation d\'événements.',
          en: 'In-store sales, department management, event organization.',
        },
      },
    },
    {
      id: 'thrustmaster',
      company: { fr: 'Thrustmaster', en: 'Thrustmaster' },
      role: { fr: 'Chef de produit junior (producer)', en: 'Junior Product Manager (Producer)' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2012 - 2014', en: '2012 - 2014' },
      description: {
        fr: 'Suivi de projets pour la création de nouveaux périphériques de simulation et coordination des équipes : R&D / Production / Marketing / Commerciales. Analyse des marchés. Recommandations stratégiques marketing. Benchmarks. Suivi des relations partenaires licences (Air Force, Ferrari, Sony).',
        en: 'Project management for the creation of new simulation peripherals and coordination of teams: R&D / Production / Marketing / Sales. Market analysis. Strategic marketing recommendations. Benchmarks. Management of partner license relationships (Air Force, Ferrari, Sony).',
      },
      techs: [],
      details: {
        context: {
          fr: 'Entreprise spécialisée dans les périphériques de simulation.',
          en: 'Company specialized in simulation peripherals.',
        },
        tasks: {
          fr: [
            'Coordination des équipes R&D, Production, Marketing et Commerciales.',
            'Analyse de marché et recommandations stratégiques.',
            'Gestion des relations avec les partenaires (Air Force, Ferrari, Sony).',
          ],
          en: [
            'Coordination of R&D, Production, Marketing and Sales teams.',
            'Market analysis and strategic recommendations.',
            'Management of partner relationships (Air Force, Ferrari, Sony).',
          ],
        },
        env: {
          fr: 'Gestion de projet, coordination d\'équipes, analyse de marché.',
          en: 'Project management, team coordination, market analysis.',
        },
      },
    },
    {
      id: 'ubisoft',
      company: { fr: 'Ubisoft EMEA', en: 'Ubisoft EMEA' },
      role: { fr: 'Coordinateur des ventes EMEA', en: 'EMEA Sales Coordinator' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2009 - 2010', en: '2009 - 2010' },
      description: {
        fr: 'Pérennisation des ventes du Back Catalogue en retail et BtoB, pilotage du business plan. Veille concurrentielle. Création et suivi d\'opérations promotionnelles en soutien des filiales Europe et Monde.',
        en: 'Sustainability of Back Catalogue sales in retail and BtoB, business plan management. Competitive intelligence. Creation and monitoring of promotional operations to support European and global subsidiaries.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Éditeur de jeux vidéo international.',
          en: 'International video game publisher.',
        },
        tasks: {
          fr: [
            'Pilotage du business plan pour les ventes BtoB et retail.',
            'Veille concurrentielle et analyse de marché.',
            'Création et suivi d\'opérations promotionnelles.',
          ],
          en: [
            'Management of the business plan for BtoB and retail sales.',
            'Competitive intelligence and market analysis.',
            'Creation and monitoring of promotional operations.',
          ],
        },
        env: {
          fr: 'Gestion de business plan, veille concurrentielle, marketing opérationnel.',
          en: 'Business plan management, competitive intelligence, operational marketing.',
        },
      },
    },
    {
      id: 'fia',
      company: { fr: 'FIA / FOM / CNMC', en: 'FIA / FOM / CNMC' },
      role: { fr: 'Coordinateur / Runner', en: 'Coordinator / Runner' },
      type: { fr: 'CDD/Intérim', en: 'Fixed-term/Temp' },
      period: { fr: '2005 - 2010', en: '2005 - 2010' },
      description: {
        fr: 'Coordination Direction de course / Écuries sur des événements à rayonnement mondiaux de la course automobile : Formule 1, Endurance, GT FIA.',
        en: 'Coordination between Race Direction and Teams at global motorsport events: Formula 1, Endurance, FIA GT.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Événements de course automobile de renommée mondiale.',
          en: 'World-renowned motorsport events.',
        },
        tasks: {
          fr: [
            'Coordination entre la direction de course et les écuries.',
            'Gestion logistique des événements.',
          ],
          en: [
            'Coordination between race direction and teams.',
            'Logistical management of events.',
          ],
        },
        env: {
          fr: 'Coordination d\'événements, gestion logistique, milieu sportif international.',
          en: 'Event coordination, logistics management, international sports environment.',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Groupe Sup de Co Amiens', en: 'Groupe Sup de Co Amiens' },
      degree: { fr: 'Formation Grandes Ecoles de commerce', en: 'Business School Program' },
      specialty: { fr: 'Marketing, gestion, commerce', en: 'Marketing, Management, Business' },
      period: '2009 - 2011',
    },
    {
      school: { fr: 'EGC Nevers', en: 'EGC Nevers' },
      degree: { fr: 'Bachelor in Business and Management', en: 'Bachelor in Business and Management' },
      specialty: { fr: 'Responsable Marketing, commercialisation et gestion', en: 'Marketing, Sales and Management' },
      period: '2008',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Photographie', en: 'Photography' },
      details: [
        { fr: 'Numérique, argentique, cyanotypes, chambre photographique', en: 'Digital, film, cyanotypes, large format' },
      ],
    },
    {
      title: { fr: 'Cuisine', en: 'Cooking' },
    },
    {
      title: { fr: 'Jeux vidéo', en: 'Video games' },
    },
    {
      title: { fr: 'Moto', en: 'Motorcycle' },
    },
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech. env:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences for more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}

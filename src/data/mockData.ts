export interface Video {
  id: string;
  title: string;
  director?: string;
  year: number;
  rating: number;
  genre: string;
  duration?: string;
  image: string;
  description: string;
  progress?: number;
}

export function getMockData() {
  return {
    continueWatching: [
      {
        id: '1',
        title: 'The Lighthouse Keeper',
        director: 'James Morrison',
        year: 2023,
        rating: 4.7,
        genre: 'Drama',
        duration: '102 min',
        image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'A solitary lighthouse keeper confronts his past when a mysterious stranger arrives on his isolated island.',
        progress: 67
      },
      {
        id: '2',
        title: 'Echoes of Tomorrow',
        director: 'Ana Gutierrez',
        year: 2024,
        rating: 4.5,
        genre: 'Sci-Fi',
        duration: '118 min',
        image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'In a near-future world, a young woman discovers she can hear the thoughts of people from the past.',
        progress: 23
      },
      {
        id: '3',
        title: 'The Art of Silence',
        director: 'Kenji Nakamura',
        year: 2023,
        rating: 4.8,
        genre: 'Documentary',
        duration: '89 min',
        image: 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'An intimate portrait of mime artists preserving their ancient craft in modern Tokyo.',
        progress: 45
      }
    ] as Video[],

    newReleases: [
      {
        id: '4',
        title: 'Midnight in the Garden',
        director: 'Sofia Chen',
        year: 2024,
        rating: 4.8,
        genre: 'Drama',
        duration: '124 min',
        image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'A haunting exploration of urban solitude and human connection in the digital age.'
      },
      {
        id: '5',
        title: 'The Last Bookstore',
        director: 'Marcus Webb',
        year: 2024,
        rating: 4.6,
        genre: 'Documentary',
        duration: '95 min',
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Following the final days of an independent bookstore and the community it served for decades.'
      },
      {
        id: '6',
        title: 'Fragments of Memory',
        director: 'Isabella Rossi',
        year: 2024,
        rating: 4.7,
        genre: 'Drama',
        duration: '110 min',
        image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'A woman with amnesia pieces together her identity through fragments of forgotten memories.'
      },
      {
        id: '7',
        title: 'Urban Echoes',
        director: 'Elena Rodriguez',
        year: 2024,
        rating: 4.9,
        genre: 'Drama',
        duration: '108 min',
        image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Three interconnected stories unfold across one transformative night in the city.'
      }
    ] as Video[],

    recentlyWatched: [
      {
        id: '8',
        title: 'The Painter\'s Dream',
        director: 'Vincent Laurent',
        year: 2023,
        rating: 4.4,
        genre: 'Biography',
        duration: '126 min',
        image: 'https://images.pexels.com/photos/1760447/pexels-photo-1760447.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'The untold story of a forgotten artist whose work revolutionized modern abstract painting.'
      },
      {
        id: '9',
        title: 'Ocean\'s Call',
        director: 'Maria Santos',
        year: 2023,
        rating: 4.6,
        genre: 'Documentary',
        duration: '87 min',
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Marine biologists race to save coral reefs while uncovering the ocean\'s hidden secrets.'
      },
      {
        id: '10',
        title: 'The Village Baker',
        director: 'Pierre Dubois',
        year: 2022,
        rating: 4.3,
        genre: 'Drama',
        duration: '94 min',
        image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'A traditional baker struggles to keep his family business alive in a changing world.'
      }
    ] as Video[],

    awardWinners: [
      {
        id: '11',
        title: 'Songs of the River',
        director: 'David Kim',
        year: 2023,
        rating: 4.9,
        genre: 'Drama',
        duration: '115 min',
        image: 'https://images.pexels.com/photos/1481880/pexels-photo-1481880.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Winner of the Sundance Grand Jury Prize. A multigenerational story set along a changing riverbank.'
      },
      {
        id: '12',
        title: 'Breaking Barriers',
        director: 'Rachel Thompson',
        year: 2023,
        rating: 4.8,
        genre: 'Documentary',
        duration: '103 min',
        image: 'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Academy Award winner for Best Documentary. The story of athletes overcoming impossible odds.'
      }
    ] as Video[],

    documentaries: [
      {
        id: '13',
        title: 'The Mind\'s Eye',
        director: 'Dr. Sarah Mitchell',
        year: 2024,
        rating: 4.7,
        genre: 'Documentary',
        duration: '98 min',
        image: 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Exploring the latest neuroscience research on creativity and artistic expression.'
      },
      {
        id: '14',
        title: 'Guardians of the Forest',
        director: 'Tom Anderson',
        year: 2023,
        rating: 4.6,
        genre: 'Documentary',
        duration: '106 min',
        image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Indigenous communities protecting ancient forests from industrial development.'
      }
    ] as Video[],

    international: [
      {
        id: '15',
        title: 'La Nuit Éternelle',
        director: 'François Moreau',
        year: 2024,
        rating: 4.5,
        genre: 'Drama',
        duration: '112 min',
        image: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'A poetic French drama about a night that changes everything for a small town café owner.'
      },
      {
        id: '16',
        title: 'Tokyo Rain',
        director: 'Hiroshi Tanaka',
        year: 2023,
        rating: 4.7,
        genre: 'Romance',
        duration: '98 min',
        image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Two strangers find connection during a rainy season in modern Tokyo.'
      }
    ] as Video[]
  };
}
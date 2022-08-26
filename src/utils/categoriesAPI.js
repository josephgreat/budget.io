const categories = [
    {
        category: 'food & drinks',
        icon: {},
        children: [
            {
                value: 'general - food & drinks',
                icon: {},
            },
            {
                value: 'bar, cafe',
                icon: {},
            },
            {
                value: 'groceries',
                icon: {},
            },
            {
                value: 'restaurant, fast-food',
                icon: {},
            },
            {
                value: 'snacks',
                icon: {},
            },
            {
                value: 'beverages',
                icon: {},
            },
        ],
        colorcode: ''
    },
    {
        category: 'shopping',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'general - shopping',
                icon: {},
            },
            {
                value: 'clothes & shoes',
                icon: {},
            },
            {
                value: 'Drug-store, chemist',
                icon: {},
            },
            {
                value: 'electronics, accessories',
                icon: {},
            },
            {
                value: 'free time',
                icon: {},
            },
            {
                value: 'gifts, joy',
                icon: {},
            },
            {
                value: 'beauty',
                icon: {},
            },
            {
                value: 'jewels',
                icon: {},
            },
            {
                value: 'kids',
                icon: {},
            },
            {
                value: 'pets, animals',
                icon: {},
            },
            {
                value: 'stationary, tools',
                icon: {},
            },
        ]
    },
    {
        category: 'housing',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'general - housing',
                icon: {},
            },
            {
                value: 'mortage',
                icon: {},
            },
            {
                value: 'property taxes',
                icon: {},
            },
            {
                value: 'rent',
                icon: {},
            },
            {
                value: 'strata fees',
                icon: {},
            },
            {
                value: 'house insurance', 
                icon: {},
            },
            {
                value: 'maintenance, repairs',
                icon: {},
            },
            {
                value: 'energy, utilities',
                icon: {},
           },
        ]
    },
    {
        category: 'household',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'furnance',
                icon: {},
            },
            {
                value: 'water tank',
                icon: {},
            },
            {
                value: 'roof & gutters',
                icon: {},
            },
            {
                value: 'decor',
                icon: {},
            },
            {
                value: 'storage locker',
                icon: {},
            },
            {
                value: 'gardening', 
                icon: {},
            },
            {
                value: 'cleaning services',
                icon: {},
            },
            {
                value: 'outdoor equipments and maintenace',
                icon: {},
            },
            {
                value: 'upgrades',
                icon: {},
            },
        ]
    },
    {
        category: 'Transportation',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'general - transportation',
                icon: {},
            }, 
            {
                value: 'business trips',
                icon: {},
            }, 
            {
                value: 'long distance',
                icon: {},
            }, 
            {
                value: 'public transport',
                icon: {},
            }, 
            {
                value: 'taxi',
                icon: {},
            }, 
        ]
    },
    {
        category: 'Vehicle',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'general - vehicle',
                icon: {},
            },
            {
                value: 'fuel',
                icon: {},
            },
            {
                value: 'rentals',
                icon: {},
            },
            {
                value: 'parking',
                icon: {},
            },
            {
                value: 'auto insurance',
                icon: {},
            },
            {
                value: 'vehicle maintenance',
                icon: {},
            },
        ]
    },
    {
        category: 'Health',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'general - health',
                icon: {},
            },
            {
                value: 'medical premiums',
                icon: {},
            },
            {
                value: 'medication',
                icon: {},
            },
            {
                value: 'life insurance',
                icon: {},
            },
            {
                value: 'eye care',
                icon: {},
            },
            {
                value: 'dental',
                icon: {},
            },
            {
                value: 'supplements',
                icon: {},
            },
            {
                value: 'wellness costs',
                icon: {},
            },
        ]
    },
    {
        category: 'Living',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'general - living',
                icon: {},
            },
            {
                value: 'personal care',
                icon: {},
            },
            {
                value: 'salon',
                icon: {},
            },
            {
                value: 'fitness',
                icon: {},
            },
            {
                value: 'Education & development',
                icon: {},
            },
            {
                value: 'clubs',
                icon: {},
            },
            {
                value: 'Associations',
                icon: {},
            },
        ]
    },
    {
        category: 'Entertainment',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'general - Entertainment',
                icon: {},
            },
            {
                value: 'recreation',
                icon: {},
            },
            {
                value: 'sports',
                icon: {},
            },
            {
                value: 'movies',
                icon: {},
            },
            {
                value: 'concerts',
                icon: {},
            },
            {
                value: 'hobbies',
                icon: {},
            },
            {
                value: 'gaming',
                icon: {},
            },
            {
                value: 'culture',
                icon: {},
            },
            {
                value: 'books, audio, subscriptions',
                icon: {},
            },
        ]
    },
    {
        category: 'child care',
        icon: {},
        colorcode: '',
        children: [
            {
                value: 'general - Child care',
                icon: {},
            },
            {
                value: 'daycare',
                icon: {},
            },
            {
                value: 'lessons & activities',
                icon: {},
            },
            {
                value: 'allowance',
                icon: {},
            },
            {
                value: 'school supplies and fees',
                icon: {},
            },
            {
                value: 'babysitting',
                icon: {},
            },
            {
                value: 'programs',
                icon: {},
            },
            {
                value: 'tutors',
                icon: {},
            },
        ]
    },
    {
        category: 'communication & utilities',
        children: [
            {
                value: 'general - communication & utilities',
                icon: {},
            },
            {
                value: 'internet',
                icon: {},
            },
            {
                value: 'phone',
                icon: {},
            },
            {
                value: 'postal services',
                icon: {},
            },
            {
                value: 'software, apps, games',
                icon: {},
            },
            {
                value: 'gas',
                icon: {},
            },
            {
                value: 'hydro',
                icon: {},
            },
            {
                value: 'security',
                icon: {},
            },
        ]
    },
    {
        category: 'Financial expenses',
        children: [
            {
                value: 'general - financial expences',
                icon: {},
            },
            {
                value: 'charges, fees',
                icon: {},
            },
            {
                value: 'advisory',
                icon: {},
            },
            {
                value: 'fines',
                icon: {},
            },
            {
                value: 'insurances',
                icon: {},
            },
            {
                value: 'loan, interests',
                icon: {},
            },
            {
                value: 'debts',
                icon: {},
            },
            {
                value: 'taxes',
                icon: {},
            },
            {
                value: 'human resources',
                icon: {},
            },
        ]
    },
    {
        category: 'Investments',
        children: [
            {
                value: 'general - investments',
                icon: {},
            },
            {
                value: 'shares',
                icon: {},
            },
            {
                value: 'realty',
                icon: {},
            },
            {
                value: 'cryptocurrency & gift cards',
                icon: {},
            },
            {
                value: 'NFTs',
                icon: {},
            },
            {
                value: 'forex',
                icon: {},
            },
            {
                value: 'savings',
                icon: {},
            },
            {
                value: 'collections',
                icon: {},
            },
            {
                value: 'innovative ideas',
                icon: {},
            },
        ]
    },
    {
        category: 'others',
        icon: {},
        colorcode: ''
    }
];

export default categories;
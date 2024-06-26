const roomsSection = {
    rooms: [
        {
            id: 0,
            dataTarget: "modal-guest-house",
            name: "Standard Room",
            modalTitle: "Guest House: Standard Room",
            thumbnail: "images/guestHouse/thumbnail.jpg",
            numberOfRoom: "4 rooms",
            numberOfRoomModal: "4 rooms",
            numberOfGuest: "1-2 Guests",
            roomSize: "12 m",
            bed: "1 Double Bed/1 Trundle Bed",
            description: "Nulla vel metus scelerisque ante sollicitudin. Fusce condimentum nunc ac nisi vulputate fringilla.",
            images: [
                {
                    imageId: 0,
                    imageActive: true,
                    imagePath: "images/guestHouse/guestHouse1.jpg",
                },
                {
                    imageId: 1,
                    imageActive: false,
                    imagePath: "images/guestHouse/guestHouse2.jpg"
                },
                {
                    imageId: 2,
                    imageActive: false,
                    imagePath: "images/guestHouse/guestHouse3.jpg",
                },
                {
                    imageId: 3,
                    imageActive: false,
                    imagePath: "images/guestHouse/guestHouse4.jpg",
                },
                {
                    imageId: 4,
                    imageActive: false,
                    imagePath: "images/guestHouse/guestHouse5.jpg",
                },
                {
                    imageId: 5,
                    imageActive: false,
                    imagePath: "images/guestHouse/guestHouse6.jpg",
                },
                {
                    imageId: 8,
                    imageActive: false,
                    imagePath: "images/guestHouse/guestHouse9.jpg",
                },
            ],
            facilities: "<h3>AC</h3><h3>TV</h3><h3>Wi-Fi</h3><h3>Water Heater</h3><h3>Private Bathroom</h3>",
            address: "<p>Gg. Kenari Indah I, Miliran UH 2, D.I. Yogyakarta</p>",
            mapEmbed: "<div class=\"d-flex\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.9399978461915!2d110.38991624692304!3d-7.800622005731553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a577ca4f128dd%3A0xf2814706b60fe93!2sGg.%20Kenari%20Indah%20I%2C%20Muja%20Muju%2C%20Kec.%20Umbulharjo%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055165!5e0!3m2!1sen!2sid!4v1718864226541!5m2!1sen!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe></div>",
        },

        {
            id: 1,
            dataTarget: "modal-guest-house-vip",
            name: "Deluxe Room",
            modalTitle: "Guest House: Deluxe Room",
            thumbnail: "images/guestHouseVIP/thumbnail.jpg",
            numberOfRoom: "1 room",
            numberOfRoomModal: "1 room",
            numberOfGuest: "1-2 Guests",
            roomSize: "12 m",
            bed: "1 Queen Bed",
            description: "Nulla vel metus scelerisque ante sollicitudin. Fusce condimentum nunc ac nisi vulputate fringilla.",
            images: [
                {
                    imageId: 0,
                    imageActive: true,
                    imagePath: "images/guestHouseVIP/guestHouseVIP1.jpg",
                },
                {
                    imageId: 1,
                    imageActive: false,
                    imagePath: "images/guestHouseVIP/guestHouseVIP2.jpg"
                },
                {
                    imageId: 2,
                    imageActive: false,
                    imagePath: "images/guestHouseVIP/guestHouseVIP3.jpg",
                },
                {
                    imageId: 3,
                    imageActive: false,
                    imagePath: "images/guestHouseVIP/guestHouseVIP4.jpg",
                },
                {
                    imageId: 4,
                    imageActive: false,
                    imagePath: "images/guestHouseVIP/guestHouseVIP5.jpg",
                },
                {
                    imageId: 5,
                    imageActive: false,
                    imagePath: "images/guestHouseVIP/guestHouseVIP6.jpg",
                },
                {
                    imageId: 6,
                    imageActive: false,
                    imagePath: "images/guestHouseVIP/guestHouseVIP7.jpg",
                },
                {
                    imageId: 7,
                    imageActive: false,
                    imagePath: "images/guestHouseVIP/guestHouseVIP8.jpg",
                },
            ],
            facilities: "<h3>AC</h3><h3>TV</h3><h3>Wi-Fi</h3><h3>Water Heater</h3><h3>Private Bathroom</h3>",
            address: "<p>Gg. Kenari Indah I, Miliran UH 2, D.I. Yogyakarta</p>",
            mapEmbed: "<div class=\"d-flex\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.9399978461915!2d110.38991624692304!3d-7.800622005731553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a577ca4f128dd%3A0xf2814706b60fe93!2sGg.%20Kenari%20Indah%20I%2C%20Muja%20Muju%2C%20Kec.%20Umbulharjo%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055165!5e0!3m2!1sen!2sid!4v1718864226541!5m2!1sen!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe></div>",
        },

        {
            id: 2,
            dataTarget: "modal-woman-dormitory",
            name: "Woman Dormitory",
            modalTitle: "Woman Dormitory",
            thumbnail: "images/dormitory/thumbnail.jpeg",
            numberOfRoom: "10 rooms",
            numberOfRoomModal: "10 rooms",
            numberOfGuest: "1 Guest",
            roomSize: "9 m",
            bed: "1 Multifunctional Bed",
            description: "Nulla vel metus scelerisque ante sollicitudin. Fusce condimentum nunc ac nisi vulputate fringilla.",
            images: [
                {
                    imageId: 0,
                    imageActive: true,
                    imagePath: "images/dormitory/dormitory1.jpeg",
                },
                {
                    imageId: 1,
                    imageActive: false,
                    imagePath: "images/dormitory/dormitory2.jpeg"
                },
                {
                    imageId: 2,
                    imageActive: false,
                    imagePath: "images/dormitory/dormitory3.jpeg",
                },
                {
                    imageId: 3,
                    imageActive: false,
                    imagePath: "images/dormitory/dormitory4.jpeg",
                },
                {
                    imageId: 4,
                    imageActive: false,
                    imagePath: "images/dormitory/dormitory5.jpeg",
                },
            ],
            facilities: "<h3>AC</h3><h3>Wi-Fi</h3><h3>Private Bathroom</h3>",
            address: "<p>Gg. Kenari Indah I, Miliran UH 2, D.I. Yogyakarta</p>",
            mapEmbed: "<div class=\"d-flex\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.9399978461915!2d110.38991624692304!3d-7.800622005731553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a577ca4f128dd%3A0xf2814706b60fe93!2sGg.%20Kenari%20Indah%20I%2C%20Muja%20Muju%2C%20Kec.%20Umbulharjo%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055165!5e0!3m2!1sen!2sid!4v1718864226541!5m2!1sen!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe></div>",
        },

        {
            id: 3,
            dataTarget: "modal-apartment",
            name: "Apartment",
            modalTitle: "Apartment",
            thumbnail: "images/apartment/thumbnail.jpeg",
            numberOfRoom: "1 unit apartment",
            numberOfRoomModal: "1 bedroom & 1 bathroom",
            numberOfGuest: "1-2 Guests",
            roomSize: "51 m",
            bed: "1 Multifunctional Bed",
            description: "Nulla vel metus scelerisque ante sollicitudin. Fusce condimentum nunc ac nisi vulputate fringilla.",
            images: [
                {
                    imageId: 0,
                    imageActive: true,
                    imagePath: "images/apartment/apartment1.jpeg",
                },
                {
                    imageId: 1,
                    imageActive: false,
                    imagePath: "images/apartment/apartment2.jpeg"
                },
                {
                    imageId: 2,
                    imageActive: false,
                    imagePath: "images/apartment/apartment3.jpeg",
                },
                {
                    imageId: 3,
                    imageActive: false,
                    imagePath: "images/apartment/apartment4.jpeg",
                },
                {
                    imageId: 4,
                    imageActive: false,
                    imagePath: "images/apartment/apartment5.jpeg",
                },
                {
                    imageId: 5,
                    imageActive: false,
                    imagePath: "images/apartment/apartment6.jpeg",
                },
                {
                    imageId: 6,
                    imageActive: false,
                    imagePath: "images/apartment/apartment7.jpeg",
                },
                {
                    imageId: 7,
                    imageActive: false,
                    imagePath: "images/apartment/apartment8.jpeg",
                },
                {
                    imageId: 8,
                    imageActive: false,
                    imagePath: "images/apartment/apartment9.jpeg",
                },
            ],
            facilities: "<h3>Kitchen</h3><h3>TV</h3><h3>Parking Lot</h3><h3>Internet</h3><h3>Swimming Pool</h3><h3>Gym</h3>",
            address: "<p>Arandra Residence, Jl. Cempaka Putih Raya No.1 1, RT.1/RW.6, Cemp. Putih Tim., Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510</p>",
            mapEmbed: "<div class=\"d-flex\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6588164421305!2d106.86277427404326!3d-6.176408293810982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c710564caf%3A0xa4e127f3926de7ed!2sArandra%20Residence%20Official!5e0!3m2!1sen!2sid!4v1719059907503!5m2!1sen!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe></div>",
        },
    ],
}

const galleryPage = {
    images: [
        // Gallery Guest House
        {
            id: 100,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse1.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 101,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse2.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 102,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse3.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 103,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse4.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 104,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse5.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 105,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse6.jpeg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 106,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse7.jpeg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 107,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse8.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 108,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse9.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 109,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse10.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1010,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse11.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1011,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse12.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1012,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse13.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1013,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse14.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1014,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse15.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1015,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse16.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1016,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse17.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1017,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse18.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1018,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse19.jpg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1019,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse20.jpeg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1020,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse21.jpeg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        {
            id: 1021,
            imagePath: "images/galleryGuestHouse/galleryGuestHouse22.jpeg",
            dataFilter: "guest-house",
            altText: "Guest House Image",
        },
        
        // END Gallery Guest House

        // Gallery Woman Dormitory
        {
            id: 2001,
            imagePath: "images/galleryDormitory/galleryDormitory1.jpg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        {
            id: 2002,
            imagePath: "images/galleryDormitory/galleryDormitory2.jpg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        {
            id: 2003,
            imagePath: "images/galleryDormitory/galleryDormitory3.jpg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        {
            id: 2004,
            imagePath: "images/galleryDormitory/galleryDormitory4.jpg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        {
            id: 2005,
            imagePath: "images/galleryDormitory/galleryDormitory5.jpeg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        {
            id: 2006,
            imagePath: "images/galleryDormitory/galleryDormitory6.jpeg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        {
            id: 2007,
            imagePath: "images/galleryDormitory/galleryDormitory7.jpeg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        {
            id: 2008,
            imagePath: "images/galleryDormitory/galleryDormitory8.jpeg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        {
            id: 2009,
            imagePath: "images/galleryDormitory/galleryDormitory9.jpeg",
            dataFilter: "dormitory",
            altText: "Woman Dormitory Image",
        },
        // END Gallery Woman Dormitory

        // Gallery Apartment 
        {
            id: 3001,
            imagePath: "images/apartment/apartment1.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        {
            id: 3002,
            imagePath: "images/apartment/apartment2.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        {
            id: 3003,
            imagePath: "images/apartment/apartment3.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        {
            id: 3004,
            imagePath: "images/apartment/apartment4.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        {
            id: 3005,
            imagePath: "images/apartment/apartment5.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        {
            id: 3006,
            imagePath: "images/apartment/apartment6.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        {
            id: 3007,
            imagePath: "images/apartment/apartment7.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        {
            id: 3008,
            imagePath: "images/apartment/apartment8.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        {
            id: 3009,
            imagePath: "images/apartment/apartment9.jpeg",
            dataFilter: "apartment",
            altText: "Apartment Image",
        },
        // END Gallery Apartment 
    ],
}
  const images = [
    {
      id: 'booklet',
      link: 'images/booklet.png',
      caption: 'Vancouver tech meetups booklet'
    },
    {
      id: 'newsletter',
      link: 'images/newsletter.png',
      caption: 'Newsletter template for frontend development blog'
    },
    {
      id: 'Bare_Bone',
      link: 'images/Bare_Bone.png',
      caption: 'theatric brochure'
    },
    {
      id: 'loopstation',
      link: 'images/loopstation.svg',
      caption: 'loopstation vector drawing, copy from a photo'
    },
    {
      id: 'boring-gif',
      link: 'images/006_Makarochkina.gif',
      caption: 'gif promo for Boring festival'
    },
    {
      id: '3Drendered',
      link: 'images/Makarochkina_3D_Rendered.jpg',
      caption: '3D packaging box for a made up company - Constellation Optics and its product - camera.'
    },
    {
      id: 'blue',
      link: 'images/Anastasiia_Makarochkina_blue.png',
      caption: 'Design exercise - a magazine cover with blue as a theme'
    },
    {
      id: 'poster',
      link: 'images/poster_finale.png',
      caption: 'Boring Festival poster'
    },
    {
      id: 'how_to',
      link: 'images/how_to.png',
      caption: 'mini guide on thesis, antithesis and synthesis'
    },
    {
      id: 'dogzilla',
      link: 'images/002_Makarochkina.jpg',
      caption: 'DOGZILLA'
    },
    {
      id: 'decode',
      link: 'images/CompositionalContrast.png',
      caption: 'design exercise in creating a dynamic typography composition'
    },
    {
      id: 'vector_image',
      link: 'images/vector_image.svg',
      caption: 'vector copy of a photograph'
    },
    {
      id: 'personal_icon',
      link: 'images/personal_icon.svg',
      caption: 'Personal icon - arctic fox, vector image'
    },
    {
      id: 'vim_logos',
      link: 'images/vim_logos.png',
      caption: 'Vim logo vector variants'
    },
    {
      id: '10xbabel_magazine',
      link: 'images/10xbabel.png',
      caption: '10xbabel journal first issue'
    },
    {
      id: '10xbabel_banners',
      link: 'images/banners_variants.png',
      caption: 'Ad banners for the 10xbabel journal - Small is Beautiful design project'
    }
  ];
  const loadImages = () => {
    let imagesGallery='';
    for (let i=0; i < images.length; i++) {
      imagesGallery +=
        '<a id="'+ images[i].id +'" class="ui-widget-content di" href="' + images[i].link + '" data-fancybox="images" data-caption="' + images[i].caption + '"><img src="' + images[i].link + '" class="w-100 h-auto"/></a>'
    }
    document.getElementById("pictures").innerHTML = imagesGallery;
  }

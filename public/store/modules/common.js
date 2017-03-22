const state = {
  showPage: false,
  showHeader: false,
  personal_data: {
    copyright: '© 2017  Sergei Beskorovainyi - All Rights Reserved',
    designed_with: 'BSA Lab',
    designed_with_url: 'http://www.yourdomain.com',
    contact: {
      location: '795 Folsom Ave, Suite 600',
      phone: '+01 234 567 890',
      email: 'bsa2657@yandex.ru',
      website: 'www.yourdomain.com'
    },
    twitter: { url: '#', tag: '@Osahan' },
    socials: {
      facebook: { url: '#', icon: 'fa-facebook' },
      twitter: { url: '#', icon: 'fa-twitter' },
      google: { url: '#', icon: 'fa-google-plus' },
      linkdin: { url: '#', icon: 'fa-linkedin' },
      flickr: { url: '#', icon: 'fa-flickr' },
      skype: { url: '#', icon: 'fa-skype' }
    }
  },
}

const mutations = {

  delayHeader(state) {
    setTimeout(function () {
      state.showHeader = true
    }, 100)
  },

  delayPage(state) {
    setTimeout(function () {
      state.showPage = true
    }, 100)
  }
}

export default {
  state,
  mutations
}
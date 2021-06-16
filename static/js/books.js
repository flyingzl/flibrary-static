;(function () {
    const App = Vue.defineComponent({
        compilerOptions: {
            delimiters: ['${', '}'],
        },

        setup() {
            const originBooks = Vue.ref(window.books)
            const filterName = Vue.ref('')
            const books = Vue.computed(function () {
                return originBooks.value.filter(function (book) {
                    if (!filterName.value) return true
                    return book.name.toLowerCase().indexOf(filterName.value.toLowerCase()) >= 0
                })
            })

            return {
                originBooks,
                books,
                filterName,
            }
        },
    })

    Vue.createApp(App).mount('#main')
})()

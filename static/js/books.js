;(function () {
    const App = Vue.defineComponent({
        compilerOptions: {
            delimiters: ['${', '}'],
        },

        setup() {
            const originBooks = Vue.ref(window.books)
            const filterName = Vue.ref('')
            const categories = Vue.ref(window.categories)


            const books = Vue.computed(function () {
                return originBooks.value.filter(function (book) {
                    if (!filterName.value) return true
                    return book.name.toLowerCase().indexOf(filterName.value.toLowerCase()) >= 0
                })
            })

            const currentCategoryName = Vue.computed(() => {
                const id = new URLSearchParams(location.search).get('category')
                if (!id) return  ''
                const category = categories.value.find(category => category.id === id)
                return category && category.name
            })

            const AllBtnClass = Vue.computed(() => {
                return {
                    'btn-main-sm': !currentCategoryName.value,
                    'btn-normal-sm': currentCategoryName.value,
                }
            })

            const CategoryBtnClass = Vue.computed(() => {
                return {
                    'btn-main-sm': currentCategoryName.value,
                    'btn-normal-sm': !currentCategoryName.value,
                }
            })


            return {
                books,
                filterName,
                categories,
                currentCategoryName,
                AllBtnClass,
                CategoryBtnClass
            }
        },
    })

    Vue.createApp(App).mount('#main')
})()

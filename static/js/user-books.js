;(function () {
    const App = Vue.defineComponent({
        compilerOptions: {
            delimiters: ['${', '}'],
        },

        setup() {
            const originBooks = Vue.ref(window.books)
            const books = Vue.ref([])

            books.value = originBooks.value

            const filterName = Vue.ref('')

            const sortStatus = Vue.ref(0)


            Vue.watch(filterName, function() {
                books.value = originBooks.value.filter(function (book) {
                    if (!filterName.value) return true
                    return [book.name, book.category, book.price].some(v => {
                        return `${v}`.toLowerCase().indexOf(filterName.value.toLowerCase()) >=0
                    })
                })
            })


            const isAsc = Vue.computed(() => sortStatus.value === 1)
            const isDesc = Vue.computed(() => sortStatus.value === 2)


            return {
                books,
                filterName,
                isAsc,
                isDesc,
                sortStatus
            }
        },

        mounted() {
            this.doSort(1)
        },

        methods:  {
            doSort(status) {
                this.sortStatus = status
                this.books = this.books.sort((a, b) => {
                    if (status === 1) {
                        return a.price - b.price
                    } else {
                        return b.price - a.price
                    }
                })
            }
        }
    })

    Vue.createApp(App).mount('#main')
})()

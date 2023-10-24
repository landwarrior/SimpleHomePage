export default {
    data() {
        return {
            this_year: '',
        };
    },
    created() {
        this.calcYear();
    },
    methods: {
        calcYear() {
            const date = new Date();
            this.this_year = date.getFullYear();
        },
    },
    template: /*html*/ `
    <footer class="page-footer center-align transparent grey-text text-darken-4">
      <p>&copy; 2006 - <span id="year">{{ this_year }}</span> landwarrior</p>
    </footer>
    `,
};

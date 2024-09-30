
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes:{
            light: {
                colors:{
                    background: '#fafafa',
                    primary:'#555DF7',
                    secondary:'#001D5F',

                }
            }
        }
    },
})

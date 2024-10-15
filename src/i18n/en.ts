import navigation from "@/i18n/layout/navigation";
import index from "@/i18n/pages/index";
import loginForm from "@/i18n/components/loginForm";
import tableSample from "@/i18n/components/tableSample";
import chartSample from "@/i18n/components/chartSample";



export default {
    navigation:{...navigation.en},
    index:{...index.en},
    components:{
        loginForm:{...loginForm.en},
        tableSample:{...tableSample.en},
        chartSample:{...chartSample.en},
    },
}

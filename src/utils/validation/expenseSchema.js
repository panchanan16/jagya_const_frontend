import { object, string, number, array } from "yup";


const ExpenseSchema = object().shape({
    exp_date: string().required("Date should be given!"),
    exp_name: string()
        .min(2, "Too Short!")
        .max(70, "Too Long!")
        .required("This field is required"),
    exp_amount: number()
        .required('Total is required')
        .positive('Total must be positive').test({
            name: 'Amount',
            message: 'Sum of expenses must be equal total amount',
            test: function (values) {
                const vendorSum = this.parent.vendor.reduce((acc, curr) => acc + curr.pay_amount, 0)
                const contractorSum = this.parent.contractor.reduce((acc, curr) => acc + curr.pay_amount, 0)
                return Number((contractorSum + vendorSum).toFixed(2)) == Number(values.toFixed(2));
            }
        }
        ),
    vendor: array().of(
        object().shape({
            pay_project_id: string().min(1, 'too short').required('This field is required!'),
            pay_vendor_id: string().min(1, 'too short').required('This field is required!'),
            pay_amount: number().required("Amount is required!").positive('This should be a positive integer').integer(),
            pay_note: string().min(3, "Too short !").required("This field is required!")
        })
    ),
    contractor: array().of(
        object().shape({
            pay_project_id: string().min(1, 'too short').required('This field is required!'),
            pay_con_id: string().min(1, 'too short').required('This field is required!'),
            pay_amount: number().required("Amount is required!").positive('This should be a positive integer').integer(),
            pay_note: string().min(3, "Too short !").required("This field is required!")
        })
    )
});



export default ExpenseSchema;
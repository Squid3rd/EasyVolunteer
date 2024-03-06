import QuestionForm from "@/components/auth/QuestionForm"
import MaxwidthWrapper from "@/components/MaxWidthWrapper"
const page = () =>{
    return <div>
        <MaxwidthWrapper className="pt-10 w-[600px] h-full">
            <QuestionForm></QuestionForm>
        </MaxwidthWrapper>
    </div>

}
export default page
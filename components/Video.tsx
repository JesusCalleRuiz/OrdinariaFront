import { FunctionComponent } from "preact"
import { Vid } from "../types.ts";
type Props={
    videos:Vid[];
}
const Videos:FunctionComponent<Props>=({videos})=>{
    return(
        <div class="videos">
            <h1>Curso Deno Fresh</h1>
            {videos.map((video)=>(
                <div class ="video">
                    <span class="title">{video.title}</span>
                </div>
            )
            )}
        </div>
    )
}

export default function DropDown() {
  return (
    <div className="absolute rounded-md overflow-hidden top-[7vh] -left-[18vw] bg-neutral-50 h-[30vh] w-[23.5vw] text-sm text-neutral-500">
      <div className="w-full h-full flex justify-evenly">
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-col items-center gap-3">
            <img height='30' width='30' src="https://img.icons8.com/pulsar-line/480/github.png" alt="github" />
            <p>GitHub</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <img width="30" height="30" src="https://img.icons8.com/color/48/dropbox.png" alt="dropbox"/>
            <p>Dropbox</p>
          </div>
        </div>

        <div className="flex flex-col justify-evenly">
          <div className="flex flex-col items-center gap-3">
            <img width="30" height="30" src="https://img.icons8.com/color/48/bitbucket.png" alt="bitbucket"/>
            <p>Bitbucket</p>
          </div>
          
          <div className=" flex items-center flex-col gap-3">
            <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/30/external-mailchimp-is-a-marketing-automation-platform-and-an-email-marketing-service-logo-shadow-tal-revivo.png" alt="external-mailchimp-is-a-marketing-automation-platform-and-an-email-marketing-service-logo-shadow-tal-revivo"/>
            <p>Mail Chimp</p>
          </div>
        </div>

        <div className="flex flex-col justify-evenly">
          <div className=" flex items-center flex-col gap-3">
            <img width="30" height="30" src="https://img.icons8.com/dusk/64/dribbble.png" alt="dribbble"/>
            <p>Dribble</p>
          </div>

          <div className=" flex items-center flex-col gap-3">
            <img width="30" height="30" src="https://img.icons8.com/color/24/slack.png" alt="slack"/>
            <p>Slack</p>
          </div>
        </div>
      </div>
    </div>
  )
}
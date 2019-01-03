import * as React from "react"
import { Card, Icon, List } from "antd"
import "./job-card.css"
// import { string } from "prop-types"

interface IState {
  //   display: boolean
  css: string
}

interface IProps {
  company: string
  position: string
  dates: string
  data: Array<string>
}

class JobCard extends React.Component<IProps> {
  state: IState = {
    // display: false,
    css: "none"
  }

  toggleCard = () => {
    if (this.state.css == "none") {
      this.setState({ css: "block" })
    } else {
      this.setState({ css: "none" })
    }
    // this.setState({ display: !this.state.display })
  }

  render() {
    const data = ["my", "List"]
    return (
      <React.Fragment>
        <Card
          title={this.props.company}
          extra={<Icon type="plus" onClick={this.toggleCard} />}
          style={{ width: 750 }}
        >
          {/* <p>Full Stack Developer</p> */}
          <List
            header={
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <p>{this.props.position}</p>
                <p>{this.props.dates}</p>
              </div>
            }
            dataSource={this.props.data}
            renderItem={(item: string) => (
              <List.Item className={this.state.css}>{item}</List.Item>
            )}
          />
        </Card>
      </React.Fragment>
    )
  }
}

export default JobCard

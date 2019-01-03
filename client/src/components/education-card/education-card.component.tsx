import * as React from "react"
import { Card, Icon, List } from "antd"
import "./education-card.css"

interface IProps {
  title: string
  strings: Array<string>
  date: string
  major: string
  gpa: string
}

interface IState {
  css: string
}

class EducationCard extends React.Component<IProps> {
  state: IState = {
    css: "none"
  }

  toggleCard = () => {
    if (this.state.css == "none") {
      this.setState({ css: "block" })
    } else {
      this.setState({ css: "none" })
    }
  }

  render() {
    return (
      <Card
        title={
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              width: "98%"
            }}
          >
            <p className="title-p">{this.props.title}</p>
            <p className="title-p">{this.props.gpa}</p>
          </div>
        }
        extra={<Icon type="plus" onClick={this.toggleCard} />}
        style={{ width: 750 }}
      >
        <List
          header={
            <div
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <p>{this.props.major}</p>
              <p>{this.props.date}</p>
            </div>
          }
          dataSource={this.props.strings}
          renderItem={(item: string) => (
            <List.Item className={this.state.css}>{item}</List.Item>
          )}
        />
      </Card>
    )
  }
}

export default EducationCard

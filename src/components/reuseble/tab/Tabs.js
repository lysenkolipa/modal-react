import React, { Component } from "react";
import glamorous from "glamorous";
import Tab from "./Tab";

class Tabs extends Component {
    static Tab = Tab;
    state = {
        tabs: [],
        prevActiveTab: {},
        activeTab: this.props.activeTab,
        tabsElements: []
    };

    addTab = newTab => {
        let isNewTabFound;

        for (let i in this.state.tabs) {
            let tab = this.state.tabs[i];

            if (tab.id === newTab.id) {
                isNewTabFound = true;
                break;
            }
        }

        if (!isNewTabFound) {
            this.setState((prevState, props) => {
                return {
                    tabs: prevState.tabs.concat(newTab)
                };
            });
        }
    };

    onClick = tab => event => {
        this.setState((prevState, props) => {
            return {
                prevActiveTab: prevState.activeTab,
                activeTab: tab
            };
        });
    };

    render() {
        return (
            <ReactTabs>
                <TabsContainer>
                    <ListTabs>
                        {this.state.tabs.map((tab, index) => (
                            <TabTitleItem
                                key={index}
                                onClick={this.onClick(tab)}
                                id={tab.id}
                                innerRef={tabElement => {
                                    if (!this.state.tabsElements[tab.id]) {
                                        this.setState((prevState, props) => {
                                            const tabsElements = prevState.tabsElements;
                                            tabsElements[tab.id] = tabElement;

                                            return {
                                                tabsElements
                                            };
                                        });
                                    }
                                }}
                                isActiveTab={this.state.activeTab.id === tab.id}
                            >
                                <TabAnchorItem>{tab.title}</TabAnchorItem>
                            </TabTitleItem>
                        ))}
                    </ListTabs>

                    <ActiveTabBorder
                        activeTabElement={this.state.tabsElements[this.state.activeTab.id]}
                    />
                </TabsContainer>

                {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, {
                        activeTab: this.state.activeTab,
                        addTab: this.addTab
                    })
                )}
            </ReactTabs>
        );
    }
}

const ListTabs = glamorous.ul({
    paddingLeft: 0,
    margin: 0,
});

const TabTitleItem = glamorous.li(
    {
        display: "inline-block",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        padding: "16px 10px 16px 0",
        cursor: "pointer",
        opacity: "0.4",
        ":hover": {
            opacity: 1
        }
    },
    props => {
        return (
            props.isActiveTab && {
                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                cursor: "default",
                opacity: 1
            }
        );
    }
);

const ActiveTabBorder = glamorous.div(
    {
        height: 3,
        backgroundColor: '#165bfb',
        position: "absolute",
        bottom: 0,
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        willChange: "left, width"
    },
    props => {
        return (
            props.activeTabElement && {
                width: props.activeTabElement.offsetWidth,
                left: props.activeTabElement.offsetLeft
            }
        );
    }
);

const TabAnchorItem = glamorous.a({
    color: "#000000",
    paddingRight: '24px',
    fontSize:'14px',
    fontFamily:'SFProDisplay'
});

const TabsContainer = glamorous.div({
    position: "relative",
    borderBottom: "1px solid #dfdfdf",
    display:'flex'
});

const ReactTabs = glamorous.div({
    position: "realative"
});

export default Tabs;
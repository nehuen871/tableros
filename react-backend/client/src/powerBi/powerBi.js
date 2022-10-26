import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import "../styles/powerBi.css"

/*https://app.powerbi.com/reportEmbed?reportId=37f58113-3e68-464a-bba2-366538375822&autoAuth=true&ctid=2377472e-8004-4648-8456-bd9687afa150
https://app.powerbi.com/view?r=eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9*/
export default class PowerBiComponente extends React.Component {
    render() {
        return(
            <div className="contnedorPowerBi col-md-12">
                <PowerBIEmbed
                    embedConfig = {{
                        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                        id: '37f58113-3e68-464a-bba2-366538375822',
                        embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9',
                        accessToken: 'eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9',
                        tokenType: models.TokenType.Embed,
                        settings: {
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: false
                                }
                            },
                            background: models.BackgroundType.Transparent,
                        }
                    }}

                    eventHandlers = { 
                        new Map([
                            ['loaded', function () {console.log('Report loaded');}],
                            ['rendered', function () {console.log('Report rendered');}],
                            ['error', function (event) {console.log(event.detail);}]
                        ])
                    }
                        
                    cssClassName = { "Embed-container" }

                    getEmbeddedComponent = { (embeddedReport) => {
                        window.report = embeddedReport;
                    }}
                />
        </div>
        );
    }
}
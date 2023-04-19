import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './Packages.css'


export const Packages = () => {
    return (
        <>
            <Helmet>
                <title>Pbcreations | Pricing & Packages</title>
                <meta name="description" content="Choose your affordable packages for website design services, web development services, SEO services, SMO marketing services and more."/>
                <meta name="keywords" content="Cheap Packages For Web Design, Cheap Packages For Website Development, Cheap Packages For SEO, PPC, SMO"/>
            </Helmet>
            <div className="head portfolio imgg">
                <div className="container">
                    <h1 className="text-center"><strong> Pricing & </strong>Packages </h1>
                </div>
            </div>

            <div className="bedcrumb_service">
                <div className="container-fluid">
                    <ol className="breadcrumb" vocab="" typeof="BreadcrumbList">
                        <li><Link to="/"> <span className="fa fa-home"></span></Link></li>
                        <li><Link style={{ color: '#59c178', textDecoration:'none' }}><span>&nbsp; / Packages</span></Link></li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="container">
                <div id="inner_page_content">
                    <h1>Pricing Models</h1>
                    <p>We understand that every outsourced project has its own scope. That is why; we have prepared our pricing models keeping flexibility in mind. Depending on your business needs and financial directions, you can choose the pricing model that suits perfectly for your Project.</p>

                    <h2>Fixed Price Plan (lump-sum project cost)</h2>
                    <p>We offer fixed price quote for a project, if scope of project is well defined with clear specifications. Under this model, we discuss delivery schedule and timelines with clients to determine a mutually agreed fixed price.</p>

                    <h2>Time &amp; Material Plan (hourly cost)</h2>
                    <p>An hourly pricing is very popular if scope of work is not clear at beginning of a project, for example, for small fixes/updates for any project. This model best suits complex projects inclined to specification and design changes.</p>

                    <h2>Dedicated Team Plan (full-time staff working exclusively to your project)</h2>
                    <p>For large / on-going projects, there is better option to recruit staff on monthly basis. If there seem to be enough work to keep staff busy for full time, then this model works out best. Also, a Dedicated Team operates as an extension of Customer's Office.</p>

                </div>

            </div>

        </>
    )
}

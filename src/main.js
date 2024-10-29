// import Groq from 'groq-sdk';
import * as cheerio from 'cheerio'
// import axios from 'axios';

// const url = window.location
//
// const profileDetailsHTML = $('div.mt2.relative').html()
//
// async function getHTML() {
//   const { data: html } = await axios.get(url)
//   return html
// }


// const groq = new Groq();
// async function main() {
//   const chatCompletion = await groq.chat.completions.create({
//     "messages": [
//       {
//         "role": "system",
//         "content": "Extract the following information from the HTML text:\n  - Full Name\n  - Location\n  - Job Title\n-Education"
//       },
//     ],
//     "model": "llama3-8b-8192",
//     "temperature": 1,
//     "max_tokens": 1024,
//     "top_p": 1,
//     "stream": true,
//     "stop": null
//   });
//
//   for await (const chunk of chatCompletion) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || '');
//   }
// }
//
// main();
const html = `<main class="scaffold-layout__main">
    
            
        
<!---->      
<!---->  
    
    <section class="artdeco-card XMHjkjscADQGStwqzALvfapweGzJaHYKufg" data-member-id="978393645">
<!---->
  
      <div class="top-card-background-hero-image" style="min-height: 97.5px; max-height: 97.5px;">
        <div class="top-card-background-hero-image__bg-image">
            
    <div class="profile-topcard-background-image-edit">
      
    <div tabindex="-1" class="profile-background-image">
        <div class="profile-background-image__image-container">
            <img class="profile-background-image__image relative
                full-width full-height" id="profile-background-image-target-image" alt="Background Image" src="https://media.licdn.com/dms/image/v2/D4E16AQFNVzmHJXClHw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1695362407389?e=1735776000&amp;v=beta&amp;t=hF03hWt7N4b0pQshbJ7udFbuI6aPYvBBTL2qotQhdWY" style="left:0px;top:0px;">
        </div>
          </div>
  

      <div class="profile-topcard-background-image-edit__button">
        <div id="profile-topcard-background-image-edit-outlet"></div>
        <section class="profile-topcard-background-image-edit__icon">
            <button aria-label="Edit profile background" id="ember30" class="artdeco-button artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--primary ember-view">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="edit-small">
<!---->    
    <use href="#edit-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    
</span></button>
        </section>
      </div>
    </div>


    <div id="ember31" class="ember-view"><!----></div>

    
    <div id="ember32" class="ember-view"><!----></div>
  

    <div id="ember33" class="ember-view"><!----></div>

    
    <div id="ember34" class="ember-view"><!----></div>
  
  
        </div>
      </div>
      <div class="ph5 ">
        <div class="display-flex">
          <div class="GDTFeNlQsrdFYStSXeJRvRxGJOyFXVoIw
              text-align-left pv-top-card--photo-resize">
              
    <div>
      <div class="pv-top-card__photo-wrapper ml0">
          
    <div class="profile-photo-edit pv-top-card__edit-photo">
        <button class="profile-photo-edit__edit-btn" type="button">
            <img width="200" src="https://media.licdn.com/dms/image/v2/D4E03AQGlBA8zJprhOQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695351990207?e=1735776000&amp;v=beta&amp;t=HDozDgiwB8iNOmNLSiqlUXOGH9h9Fvb0h4nvKY3o58I" height="200" alt="Oussama Dadouch" id="ember35" class="evi-image ember-view profile-photo-edit__preview">
          <div class="profile-photo-edit__edit-icon-container">
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="edit-small">
<!---->    
    <use href="#edit-small" width="16" height="16"></use>
</svg>

          </div>
        </button>
    </div>
  
      </div>
    </div>

<!---->  
          </div>
          <div class="flex-1 flex-column">
            <div class="VXSkeKGmCaEAsDlNbtBwTgvAVsVVMEiIAGrY">
<!---->                
  <div>
    <a href="/in/oussama-dadouch/edit/intro/?profileFormEntryPoint=PROFILE_SECTION" id="ember36" class="ember-view" tabindex="-1">
      <button aria-label="Edit intro" id="ember37" class="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view mh1" type="button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="edit-medium">
<!---->    
    <use href="#edit-medium" width="24" height="24"></use>
</svg>


<span class="artdeco-button__text">
    
</span></button>
    </a>
  </div>

<!---->            </div>
          </div>
        </div>

        
    <div class="mt2 relative">
      <div class="cWlHWEBGWyyEQKzVDjPiRuPVwCYIRGQgbvY
          ">
        <div class="obYcrMeOPnmImQwynnmHUezrUnXvNzPCLgOw">
          <span tabindex="-1" id="ember38" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom artdeco-hoverable-trigger--is-hoverable ember-view">
            <a href="/in/oussama-dadouch/overlay/about-this-profile/" id="ember39" class="ember-view vnEraeBEXbUhizTYUhUfdhnezcUhrMUdfGqOAuPEQ" aria-label="Oussama has verifications">
              <h1 class="text-heading-xlarge inline t-24 v-align-middle break-words">Oussama Dadouch</h1>
<!----><!---->            </a>
            <div id="artdeco-gen-42" class="ember-view"><div id="ember41" class="ember-view"></div></div>
          </span>
<!---->            <a class="app-aware-link  pv-text-details__verify-action artdeco-button artdeco-button--secondary artdeco-button--1 ml1 t-12 t-normal" target="_self" href="https://www.linkedin.com/verify?platform=DESKTOP&amp;entryPoint=selfview_topcard" data-test-app-aware-link="">
                <svg role="none" aria-hidden="true" class="pv-text-details__verify-action-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>

              Verify now
            </a>
<!----><!---->        </div>
<!---->        <div class="text-body-medium break-words" data-generated-suggestion-target="urn:li:fsu_profileActionDelegate:1500941316">
          IT Specialist
        </div>
<!----><!----><!---->      </div>
        <ul class="CQMDXnHcMoSCSxRyEErEiksYqHmKotaJSdWY">
<!---->            <li class="gsIisntYchFQRTHXEyNCWwdSFFhPYxaAVYk">
              <button class="okGKbEfsolMWvmjKNtGMoZLZxnhrbqjIjzwk text-align-left" aria-label="Education: O.M. Beketov National University of Urban Economy in Kharkiv. Click to skip to education card" type="button">
                <img src="https://media.licdn.com/dms/image/v2/D560BAQGzHV6j06XAfQ/company-logo_100_100/company-logo_100_100/0/1709054622881/kharkiv_national_university_named_after_beketov_logo?e=1738195200&amp;v=beta&amp;t=R8G9T5GifHYdQB3Y2OlX--22jHIkEEMRK5gA8UT9NdU" alt="" id="ember75" class="evi-image ember-view zUywnRwXKryHGgVVjmUnrkINXaSkSCuXIY EntityPhoto-square-1">
                <span class="LWbOFDmBZgTHbeRDvwGbXHDsxvmjLUPYlxlosKg hoverable-link-text break-words text-body-small t-black">
                  
    <div class="tGqYrKnTmCnwZgojsrfyIAEdkYYAuzxBHbw
        inline-show-more-text--is-collapsed
        inline-show-more-text--is-collapsed-with-line-clamp
        
        
        " style="-webkit-line-clamp:2;" dir="ltr" tabindex="-1">

        O.M. Beketov National University of Urban Economy in Kharkiv
      
<!---->    </div>
  
                </span>
              </button>
            </li>
        </ul>
      <div class="cWlHWEBGWyyEQKzVDjPiRuPVwCYIRGQgbvY mt2">
<!---->        <span class="text-body-small inline t-black--light break-words">
          Kenitra, Rabat-Salé-Kénitra, Morocco
        </span>
          <span class="nEEadjatKbqbtkRjaZPphpfhoMKtDQIbiBpEJo t-black--light">
            <a href="/in/oussama-dadouch/overlay/contact-info/" id="top-card-text-details-contact-info" class="ember-view link-without-visited-state cursor-pointer text-heading-small inline-block break-words">
              Contact info
            </a>
          </span>
      </div>
    </div>
  
<!---->
        
    <ul class="ssixKnfhBdanQbAzdxtQZohoSxqeFwyaN TQMuWzRbCYcuNrdslrFPZqJtyuEBHmCI">
<!---->
        <li class="text-body-small">
              <a href="/mynetwork/invite-connect/connections/" id="ember76" class="ember-view">
                <span class="link-without-visited-state">
                  <span class="t-bold">7</span> connections
                </span>
              </a>
        </li>
    </ul>
  
<!---->
        
  <div class="anfuDzFGMipPRxubpPHaOTgZwlfTSPuJtyQg
      pv-top-card-v2-ctas__custom">
      
    <div id="ember124" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view pv-top-card-add-goals mr2">
      <button aria-expanded="false" id="top-card-ctas-add-goals-trigger" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--2 artdeco-button--primary m0" type="button" tabindex="0">
        Open to
      
<!----></button>
      <div tabindex="-1" aria-hidden="true" id="ember126" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view"><!----></div>
    </div>
  

      
      <button id="ember128" class="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view m0 mr2"><!---->
<span class="artdeco-button__text">
    Add profile section
</span></button>

<!---->  

      <div class="KqkTaTqvvUQFXvTVdhIXHJAYkxizKCXSdyjhYA
    pvs-profile-actions__custom
    pvs-profile-actions--overflow">
<!---->
<!---->
<!---->
<!---->
      
  
  
        

    <div id="ember152" class="ember-view"><!----></div>

      
          
  
            
    
  
        
      <button id="ember153" class="pvs-profile-actions__custom-action artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"><!---->
<span class="artdeco-button__text">
    Enhance profile
</span></button>
    

    

      <!---->
  
          

          <!---->
        
  
  



    <div id="ember78" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
  <button aria-expanded="false" aria-label="Resources" id="ember77-profile-overflow-action" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view pvs-profile-actions__action artdeco-button artdeco-button--secondary artdeco-button--muted
      artdeco-button--1
      artdeco-button--circle
      " type="button" tabindex="0">
      <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="overflow-web-ios-small">
<!---->    
    <use href="#overflow-web-ios-small" width="16" height="16"></use>
</svg>

  
<!----></button>
  <div tabindex="-1" aria-hidden="true" id="ember80" class="gjqIZSdQNzaFJjHTNhCbDyZnEtUwPoro artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"><div class="artdeco-dropdown__content-inner">
  
    <ul>
        <li>
          <!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
      <div aria-label="Send Oussama Dadouch’s profile via message" role="button" id="ember81" class="artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view full-width display-flex align-items-center" tabindex="0"><!---->
    <svg role="none" aria-hidden="true" class="mr3 flex-grow-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="share-linkedin-medium" data-rtl="true">
<!---->    
    <use href="#share-linkedin-medium" width="24" height="24"></use>
</svg>

    <span class="display-flex t-normal flex-1" aria-hidden="true">
      Send profile in a message
    </span>
  </div>




        </li>
        <li>
          <!---->
<!---->
<!---->
<!---->
<!---->
      <div aria-label="Save to PDF" role="button" id="ember82" class="artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view full-width display-flex align-items-center" tabindex="0"><!---->
      <svg role="none" aria-hidden="true" class="mr3 flex-grow-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="download-medium">
<!---->    
    <use href="#download-medium" width="24" height="24"></use>
</svg>

    <span class="display-flex t-normal flex-1" aria-hidden="true">Save to PDF</span>
  </div>



<!---->
<!---->
<!---->
<!---->
<!---->


        </li>

        <li>
          
    <div role="button" id="ember83" class="display-flex align-items-center full-width  artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view" tabindex="0"><!---->
        <svg role="none" aria-hidden="true" class="mr3 flex-grow-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="signal-notice-medium">
<!---->    
    <use href="#signal-notice-medium" width="24" height="24"></use>
</svg>

      <span class="display-flex t-normal flex-1" aria-hidden="true">About this profile</span>
      <span class="a11y-text" aria-live="off">About this profile</span>
    </div>

        </li>
    </ul>
  
</div>
</div>
</div>
</div>
<!----><!---->
    
  
  
        

    <div id="ember154" class="ember-view"><!----></div>

      
          
  
            
    
  
        
      <button id="ember155" class="pvs-profile-actions__custom-action-scaled artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"><!---->
<span class="artdeco-button__text">
    Enhance profile
</span></button>
    

    

      <!---->
  
          

          <!---->
        
  
  



<!---->

  </div>

<!---->
      </div>
      <div id="profile-sticky-header-toggle"></div>
        
    <div class="pv-open-to-carousel ">
          
    <section class="artdeco-card pv-open-to-carousel-card
        pv-open-to-carousel-card--enrolled pv-open-to-carousel-card--single">
<!---->
  
        <div class="display-flex justify-space-between pl3
            pr1">
          <a class="app-aware-link  pv-open-to-carousel-card__content link-without-hover-visited flex-grow-1 pv3" data-view-name="profile-opportunity-card" href="https://www.linkedin.com/in/oussama-dadouch/opportunities/job-opportunities/details?profileUrn=urn%3Ali%3Afs_normalized_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo&amp;trk=opento_sprofile_details" data-test-app-aware-link="">
            <h3 class="truncate text-body-small">
              <strong><!---->Open to work<!----></strong>
            </h3>
              <p class="truncate text-body-small">
                Customer Service Specialist and Frontend Developer roles
              </p>
            <p class="link-without-visited-state text-heading-small hoverable-link-text">
              <!---->Show details<!---->
            </p>
<!---->          </a>

            <div>
              <a class="app-aware-link  link-without-visited-state" aria-label="Edit Open to work" href="https://www.linkedin.com/in/oussama-dadouch/opportunities/job-opportunities/edit?origin=PROFILE_TOP_CARD&amp;trk=opento_sprofile_topcard" data-test-app-aware-link="">
                <button id="ember59" class="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view mt1" tabindex="-1" type="button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="edit-small">
<!---->    
    <use href="#edit-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Edit
</span></button>
              </a>
            </div>
        </div>
    
</section>
  
      
<!---->
<!---->    </div>
  

<!---->
<!---->    
</section>
<!---->  
  
        
    
    
<!---->
  
  
        
<!---->
    
<!---->  
  
        
        
<!---->
<!---->  
        
<!---->
<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="insights" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Analytics<!----></span><span class="visually-hidden"><!---->Analytics<!----></span>
              </h2>
              <p class="hrVhqJprUeZIxjPeYJUStPebJaTdRtkufs pvs-header__optional-link text-body-small">
                <span aria-hidden="true"><li-icon aria-hidden="true" type="visibility" class="v-align-bottom" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
    </svg></li-icon><span class="white-space-pre"> </span>Private to you<!----></span><span class="visually-hidden"><li-icon aria-hidden="true" type="visibility" class="v-align-bottom" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
    </svg></li-icon><span class="white-space-pre"> </span>Private to you<!----></span>
              </p>
<!---->          </div>

<!---->        </div>

<!---->      </div>
    </div>
  
  
            
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            ph5 display-flex flex-row flex-wrap
            
            ">
            <li class="pvs-list__item--three-column">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="insights_wvmp" class="optional-action-target-wrapper 
            
            display-flex" target="_self" tabindex="-1" aria-hidden="true" href="https://www.linkedin.com/me/profile-views">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <li-icon aria-hidden="true" type="people" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
    </svg></li-icon>
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="insights_wvmp" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/me/profile-views">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->4 profile views<!----></span><span class="visually-hidden"><!---->4 profile views<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->Discover who's viewed your profile.<!----></span><span class="visually-hidden"><!---->Discover who's viewed your profile.<!----></span>
                </span>
<!----><!---->          </a>
  
<!---->        </div>
<!---->      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="pvs-list__item--three-column">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="insights_content_impressions" class="optional-action-target-wrapper 
            
            display-flex" target="_self" tabindex="-1" aria-hidden="true" href="https://www.linkedin.com/analytics/creator/content?timeRange=past_7_days&amp;dimension=INDUSTRY&amp;metricType=IMPRESSIONS">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <li-icon aria-hidden="true" type="analytics" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
    </svg></li-icon>
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="insights_content_impressions" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/analytics/creator/content?timeRange=past_7_days&amp;dimension=INDUSTRY&amp;metricType=IMPRESSIONS">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->0 post impressions<!----></span><span class="visually-hidden"><!---->0 post impressions<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->Start a post to increase engagement.<!----></span><span class="visually-hidden"><!---->Start a post to increase engagement.<!----></span>
                </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->Past 7 days<!----></span><span class="visually-hidden"><!---->Past 7 days<!----></span>
              </span>
<!---->          </a>
  
<!---->        </div>
<!---->      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="pvs-list__item--three-column">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="insights_search_appearances" class="optional-action-target-wrapper 
            
            display-flex" target="_self" tabindex="-1" aria-hidden="true" href="https://www.linkedin.com/me/search-appearances/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <li-icon aria-hidden="true" type="search" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
    </svg></li-icon>
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="insights_search_appearances" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/me/search-appearances/">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->2 search appearances<!----></span><span class="visually-hidden"><!---->2 search appearances<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->See how often you appear in search results.<!----></span><span class="visually-hidden"><!---->See how often you appear in search results.<!----></span>
                </span>
<!----><!---->          </a>
  
<!---->        </div>
<!---->      </div>
<!---->
<!---->    </div>
  
  
            </li>
        </ul>
        <div class="pvs-list__footer-wrapper">
          
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--2 artdeco-button--muted 
            inline-flex justify-center full-width align-items-center artdeco-button--fluid
            
            " target="_self" aria-hidden="false" id="navigation-index-view-all-analytics" href="https://www.linkedin.com/dashboard">
<!---->            <span class="pvs-navigation__text">
              Show all analytics
            </span>
            <div class="pvs-navigation__icon">
              <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="arrow-right-small" data-rtl="true">
<!---->    
    <use href="#arrow-right-small" width="16" height="16"></use>
</svg>

            </div>
        </a>
  
      </div>
  
        </div>
  
        </div>
    </div>
  
  
<!---->        
</section>

<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="resources" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Resources<!----></span><span class="visually-hidden"><!---->Resources<!----></span>
              </h2>
              <p class="hrVhqJprUeZIxjPeYJUStPebJaTdRtkufs pvs-header__optional-link text-body-small">
                <span aria-hidden="true"><li-icon aria-hidden="true" type="visibility" class="v-align-bottom" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
    </svg></li-icon><span class="white-space-pre"> </span>Private to you<!----></span><span class="visually-hidden"><li-icon aria-hidden="true" type="visibility" class="v-align-bottom" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
    </svg></li-icon><span class="white-space-pre"> </span>Private to you<!----></span>
              </p>
<!---->          </div>

<!---->        </div>

<!---->      </div>
    </div>
  
  
            <div>
                
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="curation_hub" class="optional-action-target-wrapper 
            
            display-flex" target="_self" tabindex="-1" aria-hidden="true" href="https://www.linkedin.com/mynetwork/discover-hub">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <li-icon aria-hidden="true" type="people" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
    </svg></li-icon>
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="curation_hub" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/mynetwork/discover-hub">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->My network<!----></span><span class="visually-hidden"><!---->My network<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->See and manage your connections and interests.<!----></span><span class="visually-hidden"><!---->See and manage your connections and interests.<!----></span>
                </span>
<!----><!---->          </a>
  
<!---->        </div>
<!---->      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="resources_my_items" class="optional-action-target-wrapper 
            
            display-flex" target="_self" tabindex="-1" aria-hidden="true" href="https://www.linkedin.com/my-items">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <li-icon aria-hidden="true" type="bookmark-fill" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
    </svg></li-icon>
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="resources_my_items" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/my-items">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->Saved items<!----></span><span class="visually-hidden"><!---->Saved items<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->Keep track of your jobs, courses, and articles.<!----></span><span class="visually-hidden"><!---->Keep track of your jobs, courses, and articles.<!----></span>
                </span>
<!----><!---->          </a>
  
<!---->        </div>
<!---->      </div>
<!---->
<!---->    </div>
  
  
            </li>
        </ul>
        <div class="pvs-list__footer-wrapper">
          
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--2 artdeco-button--muted 
            inline-flex justify-center full-width align-items-center artdeco-button--fluid
            
            " target="_self" aria-hidden="false" id="navigation-index-see-all-resources" href="https://www.linkedin.com/in/oussama-dadouch/details/resources?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
<!---->            <span class="pvs-navigation__text">
              Show all 4 resources
            </span>
            <div class="pvs-navigation__icon">
              <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="arrow-right-small" data-rtl="true">
<!---->    
    <use href="#arrow-right-small" width="16" height="16"></use>
</svg>

            </div>
        </a>
  
      </div>
  
        </div>
  
        </div>
    </div>
  
  
            </div>
        
</section>

<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="about" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->About<!----></span><span class="visually-hidden"><!---->About<!----></span>
              </h2>
<!----><!---->          </div>

<!---->        </div>

          <div class="pvs-header__right-container">
<!---->              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-add-edit-deeplink-edit-about" href="https://www.linkedin.com/in/oussama-dadouch/add-edit/SUMMARY/?profileFormEntryPoint=PROFILE_SECTION&amp;trackingId=auXBjtWCS9eootC0NYoMGA%3D%3D">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="Edit about" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="edit-medium">
<!---->    
    <use href="#edit-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
          </div>
      </div>
    </div>
  
  
            
          
    <div class="display-flex ph5 pv3">
      
      <div class="
          display-flex full-width" data-generated-suggestion-target="urn:li:fsu_profileActionDelegate:-1080516778">
        
          
      <div class="jFsUyBPTAbLLxnezicOfYVHPBdmvcxQaqZJsg
          full-width t-14 t-normal t-black display-flex align-items-center" dir="ltr">
        
    <div class="tGqYrKnTmCnwZgojsrfyIAEdkYYAuzxBHbw
        inline-show-more-text--is-collapsed
        inline-show-more-text--is-collapsed-with-line-clamp
        
        
         full-width" style="-webkit-line-clamp:4;" dir="ltr" tabindex="-1">

        <span aria-hidden="true"><!---->I am a skilled IT specialist with experience in customer success at a hosting firm. I have a passion for technology and a dedication to providing top-notch service. I now have a solid technical basis and a comprehensive awareness of client demands thanks to my trip. My objective is to continue to use my knowledge and abilities to advance toward mastery of system administration. I enjoy the dynamic challenges presented by the IT industry, and I'm always looking for ways to advance my knowledge and skills in this continuously changing industry. Let's talk to find out how my goals and experience match up with the IT goals of your company.<!----></span><span class="visually-hidden"><!---->I am a skilled IT specialist with experience in customer success at a hosting firm. I have a passion for technology and a dedication to providing top-notch service. I now have a solid technical basis and a comprehensive awareness of client demands thanks to my trip. My objective is to continue to use my knowledge and abilities to advance toward mastery of system administration. I enjoy the dynamic challenges presented by the IT industry, and I'm always looking for ways to advance my knowledge and skills in this continuously changing industry. Let's talk to find out how my goals and experience match up with the IT goals of your company.<!----></span>

          <span class="inline-show-more-text__link-container-collapsed">
<!---->            <button class="inline-show-more-text__button
                inline-show-more-text__button--light
                link" aria-expanded="false" role="button" type="button">
              …see more
            </button>
          </span>

<!---->    </div>
  
      </div>
  
      
      </div>
  
    </div>
  
  
            <div>
                
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
             pvs-list--padded
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          <div class="artdeco-card full-width display-flex flex-column">
            
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
      <div class="
            
            display-flex" tabindex="-1" aria-hidden="true">
        
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <svg role="none" aria-hidden="true" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="skills-medium">
<!---->    
    <use href="#skills-medium" width="24" height="24"></use>
</svg>

    </div>
  
          </div>
  
        
      </div>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
      <div class="
              display-flex flex-column full-width">
        
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 t-bold">
            <span aria-hidden="true"><!---->Top skills<!----></span><span class="visually-hidden"><!---->Top skills<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              t-14 t-normal">
            <span aria-hidden="true"><!---->Customer Service • IT Service Management • Web Hosting • Computer Science<!----></span><span class="visually-hidden"><!---->Customer Service • IT Service Management • Web Hosting • Computer Science<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!---->          
      </div>
  
<!---->        </div>
<!---->      </div>
<!---->
          <div class="pvs-entity__action-text-with-no-wrap
              pvs-entity__tertiary-action-with-vertical-alignment">
            
        <div class="pv-action ">
          
      <div class="display-flex justify-flex-end">
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--1 artdeco-button--muted artdeco-button--circle
            
            
            " target="_self" aria-label="Show top skills" aria-hidden="false" id="navigation-overlay-section-top-skills-view-details" href="https://www.linkedin.com/in/oussama-dadouch/overlay/top-skills-details?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
            <div class="pvs-navigation__icon
                ">
              <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="arrow-right-small" data-rtl="true">
<!---->    
    <use href="#arrow-right-small" width="16" height="16"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
          </div>
    </div>
  
          </div>
  
            </li>
        </ul>
<!---->    </div>
  
  
            </div>
        
</section>

<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="services" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Services<!----></span><span class="visually-hidden"><!---->Services<!----></span>
              </h2>
<!----><!---->          </div>

<!---->        </div>

          <div class="pvs-header__right-container">
<!---->              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-edit-edit-services" href="https://www.linkedin.com/in/oussama-dadouch/opportunities/services/edit?servicePageVanityName=99433a325645ab7477">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="Edit Services" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="edit-medium">
<!---->    
    <use href="#edit-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
          </div>
      </div>
    </div>
  
  
            
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
             pvs-list--padded
            ">
            <li class="pvs-list__item--with-top-padding FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          
      <div class="jFsUyBPTAbLLxnezicOfYVHPBdmvcxQaqZJsg
          full-width t-14 t-normal t-black display-flex align-items-center" dir="ltr">
        
    <div class="tGqYrKnTmCnwZgojsrfyIAEdkYYAuzxBHbw
        inline-show-more-text--is-collapsed
        inline-show-more-text--is-collapsed-with-line-clamp
        
        
         full-width" style="-webkit-line-clamp:2;" dir="ltr" tabindex="-1">

        <span aria-hidden="true"><strong><!---->Customer Support • Technical Support<!----></strong></span><span class="visually-hidden"><strong><!---->Customer Support • Technical Support<!----></strong></span>

<!---->    </div>
  
      </div>
  
      
      </div>
  
    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
            </li>
        </ul>
        <div class="pvs-list__footer-wrapper">
          
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--2 artdeco-button--muted 
            inline-flex justify-center full-width align-items-center artdeco-button--fluid
            
            " target="_self" aria-label="Show all services link" aria-hidden="false" id="navigation-index-services-show-all" href="https://www.linkedin.com/services/page/99433a325645ab7477">
<!---->            <span class="pvs-navigation__text">
              Show all services
            </span>
            <div class="pvs-navigation__icon">
              <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="arrow-right-small" data-rtl="true">
<!---->    
    <use href="#arrow-right-small" width="16" height="16"></use>
</svg>

            </div>
        </a>
  
      </div>
  
        </div>
  
        </div>
    </div>
  
  
<!---->        
</section>

<!---->  
        
<!---->
<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="content_collections" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Activity<!----></span><span class="visually-hidden"><!---->Activity<!----></span>
              </h2>
              <p class="hrVhqJprUeZIxjPeYJUStPebJaTdRtkufs pvs-header__optional-link text-body-small">
                <span aria-hidden="true"><a class="app-aware-link " target="_self" href="https://www.linkedin.com/feed/followers/" data-test-app-aware-link=""><strong><!---->7 followers<!----></strong></a></span><span class="visually-hidden"><a class="app-aware-link " target="_self" href="https://www.linkedin.com/feed/followers/" data-test-app-aware-link=""><strong><!---->7 followers<!----></strong></a></span>
              </p>
<!---->          </div>

            <div class="pvs-header__primary-cta--with-button-spacing">
              
        <div class="pv-action p2">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--secondary artdeco-button--standard artdeco-button--2 artdeco-button--default 
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-create-post-Create-a-post" href="https://www.linkedin.com/in/oussama-dadouch/overlay/create-post">
<!---->            <span class="pvs-navigation__text">
              Create a post
            </span>
<!---->        </a>
  
      </div>
  
        </div>
  
            </div>
        </div>

          <div class="pvs-header__right-container">
<!---->              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-label="Edit default content type" aria-hidden="false" id="navigation-add-edit-deeplink-edit-recent" href="https://www.linkedin.com/in/oussama-dadouch/add-edit/CONTENT_COLLECTIONS_STAR_PILL/?profileFormEntryPoint=PROFILE_SECTION&amp;trackingId=GOe7MO%2FXTgSPIsqd13n7%2FQ%3D%3D">
            <div class="pvs-navigation__icon
                ">
              <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="edit-medium">
<!---->    
    <use href="#edit-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
          </div>
      </div>
    </div>
  
  
            
          
  
    
    <div class="mb3">
      
        
<!---->  
      
    </div>
    <div class="pv0 ph5">
      
          
      <div class="display-flex flex-column full-width pb3">
        <span class="text-body-medium-bold">You haven’t posted yet</span>
        <span class="text-body-small">Posts you share will be displayed here.</span>
      </div>
  
      
    </div>
      <footer>
        <a class="app-aware-link  profile-creator-shared-content-view__footer-action artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--3 artdeco-button--fluid artdeco-button--tertiary" href="https://www.linkedin.com/in/oussama-dadouch/recent-activity/all/" data-test-app-aware-link="">
          <svg role="none" aria-hidden="true" class="artdeco-button__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="arrow-right-small" data-rtl="true">
<!---->    
    <use href="#arrow-right-small" width="16" height="16"></use>
</svg>

          <span class="artdeco-button__text">
            Show all activity
          </span>
        </a>
      </footer>
  
  

  
<!---->        
</section>

<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="experience" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Experience<!----></span><span class="visually-hidden"><!---->Experience<!----></span>
              </h2>
<!----><!---->          </div>

<!---->        </div>

          <div class="pvs-header__right-container">
              
        <div class="pv-action ">
          
    <div id="ember88" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
      <button aria-expanded="false" id="overflow-Add-new-experience" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--3 artdeco-button--tertiary artdeco-button-dropdown-trigger
          " type="button" tabindex="0">
          
    <div class="ivm-image-view-model   ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <li-icon type="add" class="ivm-view-attr__icon  " size="large" role="img" aria-label="Add new experience"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
    </svg></li-icon>
    </div>
  
          </div>
  
      
<!----></button>
      <div tabindex="-1" aria-hidden="true" id="ember90" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view pvs-overflow-content--width"><!----></div>
    </div>

    <div id="ember91" class="ember-view"><div id="ember92" class="ember-view"><!----></div></div>
  
        </div>
  
              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-index-edit-position" href="https://www.linkedin.com/in/oussama-dadouch/details/experience?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="View experience detail screen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="edit-medium">
<!---->    
    <use href="#edit-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
          </div>
      </div>
    </div>
  
  
            
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="experience_company_logo" class="optional-action-target-wrapper 
            
            display-flex" target="_self" tabindex="-1" aria-hidden="true" href="https://www.linkedin.com/search/results/all/?keywords=Freelance">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <div class="EntityPhoto-square-3-ghost-company ivm-view-attr__ghost-entity  ">
<!---->        </div>
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
      <div class="
              display-flex flex-column full-width">
        
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 t-bold">
            <span aria-hidden="true"><!---->Website Developer<!----></span><span class="visually-hidden"><!---->Website Developer<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->Freelance<!----></span><span class="visually-hidden"><!---->Freelance<!----></span>
                </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->Jan 2020 - Present · 4 yrs 10 mos<!----></span><span class="visually-hidden"><!---->Jan 2020 to Present · 4 yrs 10 mos<!----></span>
              </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span aria-hidden="true"><!---->Remote<!----></span><span class="visually-hidden"><!---->Remote<!----></span>
              </span>
          
      </div>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="pvs-list__item--with-top-padding FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          
      <div class="jFsUyBPTAbLLxnezicOfYVHPBdmvcxQaqZJsg
          full-width t-14 t-normal t-black display-flex align-items-center" dir="ltr">
        
    <div class="tGqYrKnTmCnwZgojsrfyIAEdkYYAuzxBHbw
        inline-show-more-text--is-collapsed
        inline-show-more-text--is-collapsed-with-line-clamp
        
        
         full-width" style="-webkit-line-clamp:2;" dir="ltr" tabindex="-1">

        <span aria-hidden="true"><!---->I craft and maintain websites for diverse clients, ranging from portfolios to small businesses. Using HTML, CSS, Tailwind CSS, JavaScript, and WordPress, I collaborate closely with clients to translate their visions into captivating online experiences. My responsibilities included front-end development, ensuring responsive design, and implementing custom features to enhance user engagement.<!----></span><span class="visually-hidden"><!---->I craft and maintain websites for diverse clients, ranging from portfolios to small businesses. Using HTML, CSS, Tailwind CSS, JavaScript, and WordPress, I collaborate closely with clients to translate their visions into captivating online experiences. My responsibilities included front-end development, ensuring responsive design, and implementing custom features to enhance user engagement.<!----></span>

          <span class="inline-show-more-text__link-container-collapsed">
<!---->            <button class="inline-show-more-text__button
                inline-show-more-text__button--light
                link" aria-expanded="false" role="button" type="button">
              …see more
            </button>
          </span>

<!---->    </div>
  
      </div>
  
      
      </div>
  
    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
            </li>
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="pvs-list__item--with-top-padding FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="
        mv1
        display-flex align-items-center">
        
        <a data-field="position_contextual_skills_see_details" class="optional-action-target-wrapper display-flex link-without-hover-visited" target="_self" href="https://www.linkedin.com/in/oussama-dadouch/overlay/urn:li:fsd_profilePosition:(ACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo,2404572252)/skill-associations-details?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
            <div class="mr1
                mv1
                
                ">
              
    <ul class="ivm-entity-pile
        display-flex align-items-center t-black">
        <li class="ivm-entity-pile__img-item--stacked">
            
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <svg role="none" aria-hidden="true" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="skills-small">
<!---->    
    <use href="#skills-small" width="16" height="16"></use>
</svg>

    </div>
  
        </li>
    </ul>
  
            </div>
            
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="hoverable-link-text display-flex align-items-center
              t-14 t-normal t-black">
            <strong><!---->HTML, Cascading Style Sheets (CSS) and +3 skills<!----></strong>
          </div>
      
      </div>
  
    </div>
  
        </a>
  

<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="experience_company_logo" class="optional-action-target-wrapper 
            
            display-flex" target="_self" href="https://www.linkedin.com/company/5138169/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="48" src="https://media.licdn.com/dms/image/v2/D4E0BAQFJhgNlydBLQw/company-logo_100_100/company-logo_100_100/0/1729604162777/hostinger_logo?e=1738195200&amp;v=beta&amp;t=A5HKAxxIvBFSTvUYsb-3c0AJfmD51zY0d5kU61m3ZWU" loading="lazy" height="48" alt="Hostinger logo" id="ember93" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
      <div class="
              display-flex flex-column full-width">
        
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 t-bold">
            <span aria-hidden="true"><!---->Customer Success Specialist<!----></span><span class="visually-hidden"><!---->Customer Success Specialist<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->Hostinger International · Full-time<!----></span><span class="visually-hidden"><!---->Hostinger International · Full-time<!----></span>
                </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->Dec 2022 - Aug 2023 · 9 mos<!----></span><span class="visually-hidden"><!---->Dec 2022 to Aug 2023 · 9 mos<!----></span>
              </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span aria-hidden="true"><!---->Remote<!----></span><span class="visually-hidden"><!---->Remote<!----></span>
              </span>
          
      </div>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="pvs-list__item--with-top-padding FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="
        mv1
        display-flex align-items-center">
        
        <a data-field="position_contextual_skills_see_details" class="optional-action-target-wrapper display-flex link-without-hover-visited" target="_self" href="https://www.linkedin.com/in/oussama-dadouch/overlay/urn:li:fsd_profilePosition:(ACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo,2257726495)/skill-associations-details?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
            <div class="mr1
                mv1
                
                ">
              
    <ul class="ivm-entity-pile
        display-flex align-items-center t-black">
        <li class="ivm-entity-pile__img-item--stacked">
            
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <svg role="none" aria-hidden="true" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="skills-small">
<!---->    
    <use href="#skills-small" width="16" height="16"></use>
</svg>

    </div>
  
        </li>
    </ul>
  
            </div>
            
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="hoverable-link-text display-flex align-items-center
              t-14 t-normal t-black">
            <strong><!---->Technical Support and Remote Troubleshooting<!----></strong>
          </div>
      
      </div>
  
    </div>
  
        </a>
  

<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
<!---->        
</section>

<!---->  
        
<!---->
<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="education" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Education<!----></span><span class="visually-hidden"><!---->Education<!----></span>
              </h2>
<!----><!---->          </div>

<!---->        </div>

          <div class="pvs-header__right-container">
              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-add-edit-deeplink-add-education" href="https://www.linkedin.com/in/oussama-dadouch/add-edit/EDUCATION/?profileFormEntryPoint=PROFILE_SECTION&amp;trackingId=PW7OZxI6RFmBVFguDhcu%2Bw%3D%3D&amp;desktopBackground=MAIN_PROFILE">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="Add new education" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="add-medium">
<!---->    
    <use href="#add-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-index-edit-education" href="https://www.linkedin.com/in/oussama-dadouch/details/education?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="View education detail screen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="edit-medium">
<!---->    
    <use href="#edit-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
          </div>
      </div>
    </div>
  
  
            
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a class="optional-action-target-wrapper 
            
            display-flex" target="_self" href="https://www.linkedin.com/company/99507945/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="48" src="https://media.licdn.com/dms/image/v2/D560BAQGzHV6j06XAfQ/company-logo_100_100/company-logo_100_100/0/1709054622881/kharkiv_national_university_named_after_beketov_logo?e=1738195200&amp;v=beta&amp;t=R8G9T5GifHYdQB3Y2OlX--22jHIkEEMRK5gA8UT9NdU" loading="lazy" height="48" alt="O.M. Beketov National University of Urban Economy in Kharkiv logo" id="ember94" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/company/99507945/">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->O.M. Beketov National University of Urban Economy in Kharkiv<!----></span><span class="visually-hidden"><!---->O.M. Beketov National University of Urban Economy in Kharkiv<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->Master d'architecture, Architecture<!----></span><span class="visually-hidden"><!---->Master d'architecture, Architecture<!----></span>
                </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->2020 - 2025<!----></span><span class="visually-hidden"><!---->2020 - 2025<!----></span>
              </span>
<!---->          </a>
  
<!---->        </div>
<!---->      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a class="optional-action-target-wrapper 
            
            display-flex" target="_self" tabindex="-1" aria-hidden="true" href="https://www.linkedin.com/search/results/all/?keywords=Technical+Highschool+Errachidia">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <div class="EntityPhoto-square-3-ghost-school ivm-view-attr__ghost-entity  ">
<!---->        </div>
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/search/results/all/?keywords=Technical+Highschool+Errachidia">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->Technical Highschool Errachidia<!----></span><span class="visually-hidden"><!---->Technical Highschool Errachidia<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
<!---->              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->Sep 2016 - Jul 2019<!----></span><span class="visually-hidden"><!---->Sep 2016 - Jul 2019<!----></span>
              </span>
<!---->          </a>
  
<!---->        </div>
<!---->      </div>
<!---->
<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
<!---->        
</section>

<!---->  
        
<!---->
<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="licenses_and_certifications" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Licenses &amp; certifications<!----></span><span class="visually-hidden"><!---->Licenses &amp; certifications<!----></span>
              </h2>
<!----><!---->          </div>

<!---->        </div>

          <div class="pvs-header__right-container">
              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-add-edit-deeplink-add-licenses-and-certifications" href="https://www.linkedin.com/in/oussama-dadouch/add-edit/CERTIFICATION/?profileFormEntryPoint=PROFILE_SECTION&amp;trackingId=EKyODlygSLi%2B6QmfB9Exzg%3D%3D&amp;desktopBackground=MAIN_PROFILE">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="Add new certification" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="add-medium">
<!---->    
    <use href="#add-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-index-edit-licenses-and-certifications" href="https://www.linkedin.com/in/oussama-dadouch/details/certifications?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="View certifications detail screen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="edit-medium">
<!---->    
    <use href="#edit-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
          </div>
      </div>
    </div>
  
  
            
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="entity_image_licenses_and_certifications" class="optional-action-target-wrapper 
            
            display-flex" target="_self" href="https://www.linkedin.com/company/5046700/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="48" src="https://media.licdn.com/dms/image/v2/C4E0BAQEMcw7g_5Et_A/company-logo_100_100/company-logo_100_100/0/1654683279384/le_wagon_logo?e=1738195200&amp;v=beta&amp;t=ovTgRmEte_6rdcwXrnwZFltZRnxaSNe9eVVLnPIuWQg" loading="lazy" height="48" alt="Le Wagon logo" id="ember95" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="entity_image_licenses_and_certifications" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://app.lewagon.school/certificates/n4onk2hw6a">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->Javascript Certificate of Completion<!----></span><span class="visually-hidden"><!---->Javascript Certificate of Completion<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->Le Wagon<!----></span><span class="visually-hidden"><!---->Le Wagon<!----></span>
                </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->Issued May 2024<!----></span><span class="visually-hidden"><!---->Issued May 2024<!----></span>
              </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span aria-hidden="true"><!---->Credential ID n4onk2hw6a<!----></span><span class="visually-hidden"><!---->Credential ID n4onk2hw6a<!----></span>
              </span>
          </a>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
        <div class="pv-action pv-action__padding">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--secondary artdeco-button--standard artdeco-button--2 artdeco-button--muted 
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-label="Show credential for Javascript Certificate of Completion" aria-hidden="false" href="https://app.lewagon.school/certificates/n4onk2hw6a">
<!---->            <span class="pvs-navigation__text">
              Show credential
            </span>
            <div class="pvs-navigation__icon">
              <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="link-external-small">
<!---->    
    <use href="#link-external-small" width="16" height="16"></use>
</svg>

            </div>
        </a>
  
      </div>
  
        </div>
  
  
            </li>
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="pvs-list__item--with-top-padding FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="
        mv1
        display-flex align-items-center">
        
        <a data-field="licensesandcerts_contextual_skills_see_details" class="optional-action-target-wrapper display-flex link-without-hover-visited" target="_self" href="https://www.linkedin.com/in/oussama-dadouch/overlay/urn:li:fsd_profileCertification:(ACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo,1032468466)/skill-associations-details?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
            <div class="mr1
                mv1
                
                ">
              
    <ul class="ivm-entity-pile
        display-flex align-items-center t-black">
        <li class="ivm-entity-pile__img-item--stacked">
            
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <svg role="none" aria-hidden="true" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="skills-small">
<!---->    
    <use href="#skills-small" width="16" height="16"></use>
</svg>

    </div>
  
        </li>
    </ul>
  
            </div>
            
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="hoverable-link-text display-flex align-items-center
              t-14 t-normal t-black">
            <strong><!---->JavaScript<!----></strong>
          </div>
      
      </div>
  
    </div>
  
        </a>
  

<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="entity_image_licenses_and_certifications" class="optional-action-target-wrapper 
            
            display-flex" target="_self" href="https://www.linkedin.com/company/13425355/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="48" src="https://media.licdn.com/dms/image/v2/D4E0BAQFLraHojJVQhA/company-logo_100_100/company-logo_100_100/0/1728915497369/efset_logo?e=1738195200&amp;v=beta&amp;t=jtJvL5hurZwS88XURm1vDe5D2mktEthdrzRimGSPMQQ" loading="lazy" height="48" alt="EF SET logo" id="ember96" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
      <div class="
              display-flex flex-column full-width">
        
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 t-bold">
            <span aria-hidden="true"><!---->EF SET Certificate<!----></span><span class="visually-hidden"><!---->EF SET Certificate<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
                <span class="t-14 t-normal">
                  <span aria-hidden="true"><!---->EF SET<!----></span><span class="visually-hidden"><!---->EF SET<!----></span>
                </span>
              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->Issued Sep 2023<!----></span><span class="visually-hidden"><!---->Issued Sep 2023<!----></span>
              </span>
<!---->          
      </div>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="pvs-list__item--with-top-padding FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    
        <a class="optional-action-target-wrapper" target="_self" href="https://www.linkedin.com/in/oussama-dadouch/overlay/1635541487629/single-media-viewer?type=DOCUMENT&amp;profileId=ACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
      <div class="display-flex flex-row">
          <div>
            
    
      <div class="pvs-thumbnail__wrapper" aria-label="Thumbnail for EF SET Certificate.pdf">
        
      <figure class="pvs-thumbnail">
          <img src="https://media.licdn.com/dms/image/v2/D4E2DAQGzFoPrMtKO4Q/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1695352484835?e=1730826000&amp;v=beta&amp;t=gxUV9SDv5SZPlMcvmnFAezsboulCSt_uQMfBrdijkfQ" loading="lazy" alt="" id="thumbnail-image-ember97" class="pvs-thumbnail__image evi-image lazy-image ember-view">
<!---->
<!---->      </figure>
    
      </div>
  
  
          </div>

        <div class="flex-column ml1 align-self-center">
            
    <div class="tGqYrKnTmCnwZgojsrfyIAEdkYYAuzxBHbw
        inline-show-more-text--is-collapsed
        inline-show-more-text--is-collapsed-with-line-clamp
        
        
         t-14 t-bold break-words" style="-webkit-line-clamp:2;" dir="ltr" tabindex="-1">

        <span aria-hidden="true"><!---->EF SET Certificate.pdf<!----></span><span class="visually-hidden"><!---->EF SET Certificate.pdf<!----></span>

<!---->    </div>
  

<!---->        </div>
      </div>
    </a>
  
  
  
            </li>
        </ul>
<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
<!---->        
</section>

<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="skills" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Skills<!----></span><span class="visually-hidden"><!---->Skills<!----></span>
              </h2>
<!----><!---->          </div>

<!---->        </div>

          <div class="pvs-header__right-container">
              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-add-edit-deeplink-add-skills" href="https://www.linkedin.com/in/oussama-dadouch/add-edit/SKILL_AND_ASSOCIATION/?profileFormEntryPoint=PROFILE_SECTION&amp;trackingId=NkOF2FiiQ3mI6uj2sdJ%2FiA%3D%3D&amp;desktopBackground=MAIN_PROFILE">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="Add new skill" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="add-medium">
<!---->    
    <use href="#add-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
              
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--3 artdeco-button--muted artdeco-button--circle
            inline-flex justify-center align-self-flex-start button-placement-wrap
            
            " target="_self" aria-hidden="false" id="navigation-index-edit-skills" href="https://www.linkedin.com/in/oussama-dadouch/details/skills?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
            <div class="pvs-navigation__icon
                ">
              <svg role="img" aria-hidden="false" aria-label="View skills detail screen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="edit-medium">
<!---->    
    <use href="#edit-medium" width="24" height="24"></use>
</svg>

            </div>
<!----><!---->        </a>
  
      </div>
  
        </div>
  
          </div>
      </div>
    </div>
  
  
            
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
      <div class="
            
            display-flex" tabindex="-1" aria-hidden="true">
        
<!---->        
      </div>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="skill_card_skill_topic" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/search/results/all/?keywords=HTML&amp;origin=PROFILE_PAGE_SKILL_NAVIGATION">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->HTML<!----></span><span class="visually-hidden"><!---->HTML<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
<!----><!----><!---->          </a>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="
        mv1
        display-flex align-items-center">
        
      <div class="display-flex link-without-hover-visited">
        
            <div class="mr2
                mv1
                
                ">
              
    <ul class="ivm-entity-pile
        display-flex align-items-center t-black">
        <li class="ivm-entity-pile__img-item--stacked">
            
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <div class="ivm-view-attr__img--stacked ivm-view-attr__img--stacked-square-size-0 EntityPhoto-square-0-ghost-company-stackedFacepile  ">
<!---->        </div>
    </div>
  
        </li>
    </ul>
  
            </div>
            
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          
      <div class="jFsUyBPTAbLLxnezicOfYVHPBdmvcxQaqZJsg
          full-width t-14 t-normal t-black display-flex align-items-center" dir="ltr">
        
    <div class="tGqYrKnTmCnwZgojsrfyIAEdkYYAuzxBHbw
        inline-show-more-text--is-collapsed
        inline-show-more-text--is-collapsed-with-line-clamp
        
        
         full-width" style="-webkit-line-clamp:2;" dir="ltr" tabindex="-1">

        <span aria-hidden="true"><!---->Website Developer (Freelance)<!----></span><span class="visually-hidden"><!---->Website Developer (Freelance)<!----></span>

<!---->    </div>
  
      </div>
  
      
      </div>
  
    </div>
  
        
      </div>
  

<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
      <div class="
            
            display-flex" tabindex="-1" aria-hidden="true">
        
<!---->        
      </div>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="skill_card_skill_topic" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/search/results/all/?keywords=Cascading+Style+Sheets+%28CSS%29&amp;origin=PROFILE_PAGE_SKILL_NAVIGATION">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->Cascading Style Sheets (CSS)<!----></span><span class="visually-hidden"><!---->Cascading Style Sheets (CSS)<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
<!----><!----><!---->          </a>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
    <div class="
        mv1
        display-flex align-items-center">
        
      <div class="display-flex link-without-hover-visited">
        
            <div class="mr2
                mv1
                
                ">
              
    <ul class="ivm-entity-pile
        display-flex align-items-center t-black">
        <li class="ivm-entity-pile__img-item--stacked">
            
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <div class="ivm-view-attr__img--stacked ivm-view-attr__img--stacked-square-size-0 EntityPhoto-square-0-ghost-company-stackedFacepile  ">
<!---->        </div>
    </div>
  
        </li>
    </ul>
  
            </div>
            
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          
      <div class="jFsUyBPTAbLLxnezicOfYVHPBdmvcxQaqZJsg
          full-width t-14 t-normal t-black display-flex align-items-center" dir="ltr">
        
    <div class="tGqYrKnTmCnwZgojsrfyIAEdkYYAuzxBHbw
        inline-show-more-text--is-collapsed
        inline-show-more-text--is-collapsed-with-line-clamp
        
        
         full-width" style="-webkit-line-clamp:2;" dir="ltr" tabindex="-1">

        <span aria-hidden="true"><!---->Website Developer (Freelance)<!----></span><span class="visually-hidden"><!---->Website Developer (Freelance)<!----></span>

<!---->    </div>
  
      </div>
  
      
      </div>
  
    </div>
  
        
      </div>
  

<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
        </ul>
        <div class="pvs-list__footer-wrapper">
          
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--2 artdeco-button--muted 
            inline-flex justify-center full-width align-items-center artdeco-button--fluid
            
            " target="_self" aria-hidden="false" id="navigation-index-Show-all-14-skills" href="https://www.linkedin.com/in/oussama-dadouch/details/skills?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo">
<!---->            <span class="pvs-navigation__text">
              Show all 14 skills
            </span>
            <div class="pvs-navigation__icon">
              <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="arrow-right-small" data-rtl="true">
<!---->    
    <use href="#arrow-right-small" width="16" height="16"></use>
</svg>

            </div>
        </a>
  
      </div>
  
        </div>
  
        </div>
    </div>
  
  
<!---->        
</section>

<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
<!---->
<!---->  
        
        <section class="artdeco-card pv-profile-card break-words
            
            
            
            mt2" tabindex="-1" data-view-name="profile-card">
<!---->
  
          <div id="interests" class="pv-profile-card__anchor">
          </div>
<!---->            
          
<!---->
    <div class="tZWfnpkTiwTprHeCpmnejTxnYWccZfFmto">
      <div class="pvs-header__top-container--no-stack">
        <div class="pvs-header__left-container--stack">
          <div class="nVQGuwPyoCuIIoTThMnwkesDZQYwJypgxCjmZRM">
<!---->              <h2 class="pvs-header__title
                  
                  text-heading-large">
                <span aria-hidden="true"><!---->Interests<!----></span><span class="visually-hidden"><!---->Interests<!----></span>
              </h2>
<!----><!---->          </div>

<!---->        </div>

<!---->      </div>
    </div>
  
  
            
          
      <div id="ember99" class="artdeco-tabs artdeco-tabs--size-t-48 ember-view">
          <div aria-multiselectable="false" id="ember100" class="artdeco-tablist artdeco-tablist--no-wrap ember-view" role="tablist">
              <button tabindex="0" aria-selected="true" id="ember101" class="artdeco-tab active artdeco-tab--selected ember-view" role="tab" aria-controls="ember103">
                <span aria-hidden="true"><!---->Companies<!----></span><span class="visually-hidden"><!---->Companies<!----></span>
              </button>

              <button tabindex="-1" aria-selected="false" id="ember102" class="artdeco-tab ember-view" role="tab" aria-controls="ember108">
                <span aria-hidden="true"><!---->Schools<!----></span><span class="visually-hidden"><!---->Schools<!----></span>
              </button>

          
</div>
          <div tabindex="0" id="ember103" class="artdeco-tabpanel active ember-view" role="tabpanel" aria-labelledby="ember101">
              
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            ph5 display-flex flex-row flex-wrap
            
            ">
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks pvs-list__item--two-column">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="active_tab_companies_interests" class="optional-action-target-wrapper 
            
            display-flex" target="_self" href="https://www.linkedin.com/company/8117/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="48" src="https://media.licdn.com/dms/image/v2/C4D0BAQGH4WOP34jGTA/company-logo_100_100/company-logo_100_100/0/1630528651657/the_judge_group_logo?e=1738195200&amp;v=beta&amp;t=ip2Gh8KKJNe4RoRqZVj6GwLTJhXWI7DIR4AC2xuRr6Q" loading="lazy" height="48" alt="The Judge Group logo" id="ember104" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="active_tab_companies_interests" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/company/8117/">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true">
    <!---->The Judge Group<!---->
  </span><span class="visually-hidden">
    <!---->The Judge Group<!---->
  </span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
<!---->              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->679,517 followers<!----></span><span class="visually-hidden"><!---->679,517 followers<!----></span>
              </span>
<!---->          </a>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
        <div class="pv-action pv-action__padding">
          
    <button id="ember105" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view" type="button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="check-small">
<!---->    
    <use href="#check-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Following
</span></button>
  
        </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks pvs-list__item--two-column">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="active_tab_companies_interests" class="optional-action-target-wrapper 
            
            display-flex" target="_self" href="https://www.linkedin.com/company/62448/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="48" src="https://media.licdn.com/dms/image/v2/D4E0BAQEJqu65KZRqzQ/company-logo_100_100/company-logo_100_100/0/1725376805099/arkadium_logo?e=1738195200&amp;v=beta&amp;t=pqWvi57rFBIrwBUk3UK_C_htUUprIYxyokFTXzk1LAw" loading="lazy" height="48" alt="Arkadium logo" id="ember106" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="active_tab_companies_interests" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/company/62448/">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true">
    <!---->Arkadium<!---->
  </span><span class="visually-hidden">
    <!---->Arkadium<!---->
  </span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
<!---->              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->25,251 followers<!----></span><span class="visually-hidden"><!---->25,251 followers<!----></span>
              </span>
<!---->          </a>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
        <div class="pv-action pv-action__padding">
          
    <button id="ember107" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view" type="button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="check-small">
<!---->    
    <use href="#check-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Following
</span></button>
  
        </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
        </ul>
        <div class="pvs-list__footer-wrapper">
          
        <div class="pv-action ">
          
      <div>
        
        <a class="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--2 artdeco-button--muted 
            inline-flex justify-center full-width align-items-center artdeco-button--fluid
            
            " target="_self" aria-hidden="false" id="navigation-index-see-all-companies" href="https://www.linkedin.com/in/oussama-dadouch/details/interests?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADpRGi0BNE4gLaOY8xXtOvPuuxJrWem5XMo&amp;tabIndex=0&amp;detailScreenTabIndex=0">
<!---->            <span class="pvs-navigation__text">
              Show all companies
            </span>
            <div class="pvs-navigation__icon">
              <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="arrow-right-small" data-rtl="true">
<!---->    
    <use href="#arrow-right-small" width="16" height="16"></use>
</svg>

            </div>
        </a>
  
      </div>
  
        </div>
  
        </div>
    </div>
  
  
          </div>
          <div tabindex="0" hidden="" id="ember108" class="artdeco-tabpanel artdeco-tabpanel--hidden ember-view" role="tabpanel" aria-labelledby="ember102">
              
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            ph5 display-flex flex-row flex-wrap
            
            ">
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks pvs-list__item--two-column">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="active_tab_schools_interests" class="optional-action-target-wrapper 
            
            display-flex" target="_self" href="https://www.linkedin.com/company/18670525/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="48" src="https://media.licdn.com/dms/image/v2/C4E0BAQEB-OeuKA93ng/company-logo_100_100/company-logo_100_100/0/1674138261746/3w_academy_maroc_logo?e=1738195200&amp;v=beta&amp;t=GqlixAlMJJuvtcXuMyOJ7pCNvlA0IlYPswd9XqP44w8" loading="lazy" height="48" alt="3W Academy Maroc logo" id="ember109" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="active_tab_schools_interests" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/school/18670525/">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->3W Academy Maroc<!----></span><span class="visually-hidden"><!---->3W Academy Maroc<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
<!---->              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->4,791 followers<!----></span><span class="visually-hidden"><!---->4,791 followers<!----></span>
              </span>
<!---->          </a>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
        <div class="pv-action pv-action__padding">
          
    <button id="ember110" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view" type="button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="check-small">
<!---->    
    <use href="#check-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Following
</span></button>
  
        </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
            <li class="artdeco-list__item DBNLtNgmHEjzOxNJklyvKqIreHdRcrgCdks pvs-list__item--two-column">
              
          
<!---->    <div class="FFYtoLcCjARyISqOByreRVqOhVrPtOQfcvVM
        ptLyBRVfctaBozAzEkhnXCcnewbmLaU ORPQwAWpEgThMKINEEdvWFjFpkGAZwYCEyOXmo
        
        
        
        " data-view-name="profile-component-entity">
      <div>
        
        <a data-field="active_tab_schools_interests" class="optional-action-target-wrapper 
            
            display-flex" target="_self" href="https://www.linkedin.com/company/99507945/">
              
    <div class="ivm-image-view-model  pvs-entity__image ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="48" src="https://media.licdn.com/dms/image/v2/D560BAQGzHV6j06XAfQ/company-logo_100_100/company-logo_100_100/0/1709054622881/kharkiv_national_university_named_after_beketov_logo?e=1738195200&amp;v=beta&amp;t=R8G9T5GifHYdQB3Y2OlX--22jHIkEEMRK5gA8UT9NdU" loading="lazy" height="48" alt="O.M. Beketov National University of Urban Economy in Kharkiv logo" id="ember111" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
        </a>
  
      </div>

      <div class="display-flex flex-column align-self-center
          flex-grow-1">
        <div class="display-flex flex-row justify-space-between">
          
        <a data-field="active_tab_schools_interests" class="optional-action-target-wrapper 
              display-flex flex-column full-width" target="_self" href="https://www.linkedin.com/school/99507945/">
            <div class="display-flex flex-wrap align-items-center full-height">
                
    <div class="display-flex ">
      
      <div class="
          display-flex full-width">
        
          <div class="display-flex align-items-center
              mr1 hoverable-link-text t-bold">
            <span aria-hidden="true"><!---->O.M. Beketov National University of Urban Economy in Kharkiv<!----></span><span class="visually-hidden"><!---->O.M. Beketov National University of Urban Economy in Kharkiv<!----></span>
          </div>
      
      </div>
  
    </div>
  
<!----><!----><!---->            </div>
<!---->              <span class="t-14 t-normal
                  t-black--light">
                <span class="pvs-entity__caption-wrapper" aria-hidden="true"><!---->1,241 followers<!----></span><span class="visually-hidden"><!---->1,241 followers<!----></span>
              </span>
<!---->          </a>
  
<!---->        </div>
          
    <div class="lHucFpNrgPyFWORwKghjpbIecgMRNmIPfE pvs-entity__sub-components">
<!---->        <ul class="ZcrViFFYURhpbDPyTfVEpPNnAvuNAjM
            
            
            ">
            <li class="FDgteXLbbEZGDkNXtMqKARQEmnFERJglJGHBcgBE">
              
          
        <div class="pv-action pv-action__padding">
          
    <button id="ember112" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view" type="button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="check-small">
<!---->    
    <use href="#check-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Following
</span></button>
  
        </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
      </div>
<!---->
<!---->    </div>
  
  
            </li>
        </ul>
<!---->    </div>
  
  
          </div>
      </div>
  
  
<!---->        
</section>

<!---->  
        
<!---->
<!---->  
  
      
          
  </main>`
const $ = cheerio.load(html)
let textContent = $.text()
textContent = textContent
  .trim()
  .replace(/\s+/g, ' ');
console.log(textContent)

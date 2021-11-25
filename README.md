# Welcome to Leading University Tech Storm v4.0

Before you start working, we strive for quality. It means you can use any language, tools, architecture to show your skills. We will provide requirements that you have to meet to pass, but you can code extra features if you want. Keep in mind don't over overdo for the sake of it: prefer high-quality mandatory requirements over many optional features with lower quality. 

We ask you to write a README in Markdown Format and create a presentation of your work to check your communication skills, but also as a chance for you to reason about your implementation decisions. 

> **Do you wish to provide a non-requirement feature or take a different**
> **project? We can deal with that, as long as you explain the idea. And if**
> **that's a good idea, bonus points for you!**

# :bulb: Business Idea
As from 2019 lockdowns became the new normal, businesses and consumers increasingly went digital, providing and purchasing more goods and services online, raising global e-commerce to **$26.7** trillion! Our aim is to provide them with a platform where things can be easier to sell and consumers can have their product at a reasonable price. We are going to build a platform where every listed product(new/old) can be auctioned! We hope from here no customer has to buy their product with the unreasonable amount and bidding a product will be the new normal!
 
## :sparkles: Requirements [Total 100 points]

 1. **As an owner of the product**
	 - [ ] Ability to create an account with the listed pieces of information. **[Mandatory feature | 5 points]**
		 - [ ] First Name & Last Name
		 - [ ] Phone Number
		 - [ ] Implement Security Code based verification process while doing the registration
		 - [ ] owner can then login anytime with the phone number using OTP verification
	- [ ]  Once the account creation is done, the owner needs to verify the account by providing the following pieces of information **[Nice to have | 15 points]**.
		- [ ] National Identity Number
		- [ ] Picture of the National Identity Number (Both Side)
		- [ ] `Note that this verification process should not block the owner ability to check any features of the platform`
		- [ ] `Only restriction should be if the profile is not verified, the owner can not sell a product through the platform and his profile will remain inactive.`
		- [ ] Once the profile is verified by the **Master Admin or Support Team**  of the platform, the profile of the owner will be activated for selling and customers can see their listed products
	- [ ] Owner Profile Informations (should have the ability to update) **[Mandatory feature | 10 points]**:
		- [ ] First Name & Last Name
		- [ ] Email 
		- [ ] Phone Number
		- [ ] Seller Points, a seller points are based on the following criteria:
			- [ ] Number of products he sold, **+2** for each product
			- [ ] Number of Good reviews, **+3** for each good review, **-3** for each bad review
			- [ ] Once the number of active points is below **0**, ~~owner will not be able to sell any products~~
			- [ ] Based on active point the products of the owner will be boosted and the product should appear in the first place within the platform
	- [ ]  Product listing requirements **[Mandatory feature | 20 points]**
		- [ ] Product Category
		- [ ] Product Name
		- [ ] Product Pictures (multiple)
		- [ ] Lowest price a customer can bid
		- [ ] A date for the expiration of the bid
		- [ ] Once the bid date get expired, no customer should be able to bid, if there is no winning bid seller can again open a new bidding for the same product
		- [ ] Owner can set the criteria of winning bid
			- [ ] Owner can choose options, either Automated or Manual
				- [ ] Automated based formula (if marked as selected):
					- [ ] Highest bidder
					- [ ] Active points of the customer (a customer point is based on how often they buy products from this platform)
				- [ ] Manual Selection (if marked as selected):
					- [ ] Owner can choose anyone from the bidder
	- [ ] Payment Options **[Mandatory feature | 10 points]**
		- [ ] Owner will get paid through a payment gateway
			- [ ] Once they received the payment, they will start processing the delivery of the product
	- [ ] Notification **[Nice to have | 5 points]**
		- [ ] Owner will get notification/email on every bids
	- [ ] Search & Filter **[Nice to have | 5 points]**
		- [ ] Owner can do a search or filter all products he owns
	- [ ] Generate a sales and revenue report **[Nice to have | 5 points]**
		- [ ] Owner can check his total revenue generated  
	- [ ] Premium User VS Freemium User (an owner can open a free account or can upgrade their account to have extra benefits) **[Nice to have | 25 points]**
		- [ ] Normal users can list at max 10 products within a month whereas for premium users it will be unlimited
		- [ ] For premium users the platform will boost their product to appear in the first place on the listing page or whenever customers do a search for the product

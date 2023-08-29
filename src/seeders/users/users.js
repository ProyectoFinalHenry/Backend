import dataUser from "./dataUser.js";
import dataReview from "./dataReview.js";

const seedUser = async (sequelize) => {
    const { Coffee, Review, User, Role } = sequelize.models;
    const coffees = await Coffee.findAll();

    for (let i = 0; i < dataUser.length; i++) {
        const {
            name,
            email,
            password,
        } = dataUser[i];

        const {
            date,
            title,
            comments,
            rating
        } = dataReview[i];

        const [usr, created] = await User.findOrCreate({
            where: { name },
            defaults: {
                name,
                email,
                password,
            },
        });

        if (!created) continue;

        const role = await Role.findOne({ where: { role: 'user' } });
        await usr.setRole(role);

        const [review, createdReview] = await Review.findOrCreate({
            where: { title },
            defaults: {
                date,
                title,
                comments,
                rating
            },
        });

        if (!createdReview) continue;
        const product = await Coffee.findByPk(coffees[i].id);
        await review.setUser(usr);
        await product.addReview(review);

    }

};

export default seedUser;
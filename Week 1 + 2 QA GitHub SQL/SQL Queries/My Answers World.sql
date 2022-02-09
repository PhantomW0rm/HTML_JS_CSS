USE world;

#Using count, get the number of cities in the USA
SELECT count(*) FROM city WHERE countrycode = 'USA';

#Find out what the population and average life expectancy for people in Argentina (ARG) is
SELECT name, population, lifeexpectancy FROM country WHERE code = 'ARG';

#Using IS NOT NULL, ORDER BY, LIMIT, what country has the highest life expectancy?
SELECT * FROM country WHERE lifeexpectancy IS NOT NULL ORDER BY lifeexpectancy DESC LIMIT 1;

#Using LEFT JOIN, ON, what is the capital of Spain (ESP)?
SELECT city.name FROM country LEFT JOIN city ON country.capital = city.id WHERE country.code = 'ESP';

#Using LEFT JOIN, ON, list all the languages spoken in the 'Southeast Asia' region
SELECT cl.language FROM country c LEFT JOIN countrylanguage cl ON c.code = cl.countrycode WHERE c.region = 'Southeast Asia';

#Using COUNT and JOIN ... ON, get the number of cities in China.
SELECT COUNT(name) FROM city WHERE CountryCode = 'CHN';

#Using a single query, list 25 cities around the world that start with the letter F.
SELECT name FROM city WHERE SUBSTRING(name FROM 1 FOR 1) = 'F' LIMIT 25;

#Using IS NOT NULL, ORDER BY, and LIMIT, which country has the lowest population? Discard non-zero populations.
SELECT Name, Population FROM country WHERE Population=(
SELECT MIN(population) FROM country WHERE population>0 ORDER BY population IS NOT NULL ASC);

UPDATE country
SET HeadOfState = 'Elizabeth II',
WHERE HeadOfState 'Elisabeth II';



